({
  method: async ({ ...records }) => {
    try {
      const { clientId, target, ...args } = records;
      const validTarget = common.validNumberValue(target);
      const result = await db('Item').create({
        userId: clientId,
        target: validTarget,
        ...args,
      });
      const [item] = result.rows;
      return httpResponses.modifiedBodyTemplate(httpResponses.created, {
        itemId: item.id,
      });
    } catch (error) {
      return { ...httpResponses.error(), error };
    }
  },
});
