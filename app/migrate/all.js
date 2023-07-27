'use strict';

const { applyMigrations } = require('./');
const { processTransaction } = require('../../core/lib/db.js');

(async () => {
  try {
    await processTransaction(applyMigrations);
  } catch (e) {
    console.log(e);
  }
})();
