/* eslint-disable max-len */
'use strict';

const up = async (client) => {
  await client.query(`
    ALTER TABLE "ValueDetail" RENAME COLUMN "latestValueAt" TO "latestAt";
    ALTER TABLE "ValueDetail" ADD COLUMN "title" varchar(255);    
    ALTER TABLE "ValueDetail" ADD COLUMN "startedAt" timestamp WITHOUT time ZONE;
    ALTER TABLE "ValueDetail" ADD COLUMN "daysDone" integer;
    ALTER TABLE "ValueDetail" ADD COLUMN "daysMissed" integer;
    ALTER TABLE "ValueDetail" ADD COLUMN "daysMinStrike" integer;
    ALTER TABLE "ValueDetail" ADD COLUMN "dateDaysMinStrike" timestamp WITHOUT time ZONE;
    ALTER TABLE "ValueDetail" ADD COLUMN "daysMaxStrike" integer;
    ALTER TABLE "ValueDetail" ADD COLUMN "dateDaysMaxStrike" timestamp WITHOUT time ZONE;
    ALTER TABLE "ValueDetail" ADD COLUMN "daysLatestStrike" integer;
    ALTER TABLE "ValueDetail" ADD COLUMN "dateDaysLatestStrike" timestamp WITHOUT time ZONE;
    ALTER TABLE "ValueDetail" ADD COLUMN "daysMinDelay" integer;
    ALTER TABLE "ValueDetail" ADD COLUMN "dateDaysMinDelay" timestamp WITHOUT time ZONE;
    ALTER TABLE "ValueDetail" ADD COLUMN "daysMaxDelay" integer;
    ALTER TABLE "ValueDetail" ADD COLUMN "dateDaysMaxDelay" timestamp WITHOUT time ZONE;
    ALTER TABLE "ValueDetail" ADD COLUMN "daysLatestDelay" integer;
    ALTER TABLE "ValueDetail" ADD COLUMN "dateDaysLatestDelay" timestamp WITHOUT time ZONE;
    ALTER TABLE "ValueDetail" ADD COLUMN "min" integer;
    ALTER TABLE "ValueDetail" ADD COLUMN "dateMin" timestamp WITHOUT time ZONE;
    ALTER TABLE "ValueDetail" ADD COLUMN "max" integer;
    ALTER TABLE "ValueDetail" ADD COLUMN "dateMax" timestamp WITHOUT time ZONE;
    ALTER TABLE "ValueDetail" ADD COLUMN "minPerDay" integer;
    ALTER TABLE "ValueDetail" ADD COLUMN "dateMinPerDay" timestamp WITHOUT time ZONE;
    ALTER TABLE "ValueDetail" ADD COLUMN "maxPerDay" integer;
    ALTER TABLE "ValueDetail" ADD COLUMN "dateMaxPerDay" timestamp WITHOUT time ZONE;
    ALTER TABLE "ValueDetail" ADD COLUMN "total" integer;
    ALTER TABLE "ValueDetail" ADD COLUMN "daysTargetDone" integer;
    ALTER TABLE "ValueDetail" ADD COLUMN "daysTargetMissed" integer;
    ALTER TABLE "ValueDetail" ADD COLUMN "daysMinTargetStrike" integer;
    ALTER TABLE "ValueDetail" ADD COLUMN "dateDaysMinTargetStrike" timestamp WITHOUT time ZONE;
    ALTER TABLE "ValueDetail" ADD COLUMN "daysMaxTargetStrike" integer;
    ALTER TABLE "ValueDetail" ADD COLUMN "dateDaysMaxTargetStrike" timestamp WITHOUT time ZONE;
    ALTER TABLE "ValueDetail" ADD COLUMN "daysLatestTargetStrike" integer;
    ALTER TABLE "ValueDetail" ADD COLUMN "dateDaysLatestTargetStrike" timestamp WITHOUT time ZONE;
  `);
};

const down = async (client) => {
  await client.query(`
    ALTER TABLE "ValueDetail" RENAME COLUMN "latestAt" TO "latestValueAt";
    ALTER TABLE "ValueDetail" DROP COLUMN "title";
    ALTER TABLE "ValueDetail" DROP COLUMN "startedAt";
    ALTER TABLE "ValueDetail" DROP COLUMN "daysDone";
    ALTER TABLE "ValueDetail" DROP COLUMN "daysMissed";
    ALTER TABLE "ValueDetail" DROP COLUMN "daysMinStrike";
    ALTER TABLE "ValueDetail" DROP COLUMN "dateDaysMinStrike";
    ALTER TABLE "ValueDetail" DROP COLUMN "daysMaxStrike";
    ALTER TABLE "ValueDetail" DROP COLUMN "dateDaysMaxStrike";
    ALTER TABLE "ValueDetail" DROP COLUMN "daysLatestStrike";
    ALTER TABLE "ValueDetail" DROP COLUMN "dateDaysLatestStrike";
    ALTER TABLE "ValueDetail" DROP COLUMN "daysMinDelay";
    ALTER TABLE "ValueDetail" DROP COLUMN "dateDaysMinDelay";
    ALTER TABLE "ValueDetail" DROP COLUMN "daysMaxDelay";
    ALTER TABLE "ValueDetail" DROP COLUMN "dateDaysMaxDelay";
    ALTER TABLE "ValueDetail" DROP COLUMN "daysLatestDelay";
    ALTER TABLE "ValueDetail" DROP COLUMN "dateDaysLatestDelay";    
    ALTER TABLE "ValueDetail" DROP COLUMN "min";
    ALTER TABLE "ValueDetail" DROP COLUMN "dateMin";
    ALTER TABLE "ValueDetail" DROP COLUMN "max";
    ALTER TABLE "ValueDetail" DROP COLUMN "dateMax";
    ALTER TABLE "ValueDetail" DROP COLUMN "minPerDay";
    ALTER TABLE "ValueDetail" DROP COLUMN "dateMinPerDay";
    ALTER TABLE "ValueDetail" DROP COLUMN "maxPerDay";
    ALTER TABLE "ValueDetail" DROP COLUMN "dateMaxPerDay";
    ALTER TABLE "ValueDetail" DROP COLUMN "total";
    ALTER TABLE "ValueDetail" DROP COLUMN "daysTargetDone";
    ALTER TABLE "ValueDetail" DROP COLUMN "daysTargetMissed";
    ALTER TABLE "ValueDetail" DROP COLUMN "daysMinTargetStrike";
    ALTER TABLE "ValueDetail" DROP COLUMN "dateDaysMinTargetStrike";
    ALTER TABLE "ValueDetail" DROP COLUMN "daysMaxTargetStrike";
    ALTER TABLE "ValueDetail" DROP COLUMN "dateDaysMaxTargetStrike";
    ALTER TABLE "ValueDetail" DROP COLUMN "daysLatestTargetStrike";
    ALTER TABLE "ValueDetail" DROP COLUMN "dateDaysLatestTargetStrike";
  `);
};

module.exports = {
  up,
  down,
};
