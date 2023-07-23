-- CREATED MANUALLY

-- TYPES
CREATE TYPE "ValueType" AS ENUM ('text', 'number', 'seconds', 'minutes');

-- TABLES
CREATE TABLE "User" (
  id bigint GENERATED ALWAYS AS IDENTITY,
  email varchar(64) NOT NULL,
	token varchar(255),
  password varchar(255),
	"createdAt" timestamp WITHOUT time ZONE DEFAULT now(),
	"updatedAt" timestamp WITHOUT time ZONE,
	"deletedAt" timestamp WITHOUT time ZONE
);
ALTER TABLE "User" ADD CONSTRAINT "pkUser" PRIMARY KEY (id);
CREATE UNIQUE INDEX "akUserEmail" ON "User" (email);

CREATE TABLE "ItemSection" (
	id bigint GENERATED ALWAYS AS IDENTITY,
	title varchar(50) NOT NULL,
	"userId" bigint NOT NULL,
	"createdAt" timestamp WITHOUT time ZONE DEFAULT now(),
	"updatedAt" timestamp WITHOUT time ZONE,
	"deletedAt" timestamp WITHOUT time ZONE
);
ALTER TABLE "ItemSection" ADD CONSTRAINT "pkItemSection" PRIMARY KEY (id);
ALTER TABLE "ItemSection" ADD CONSTRAINT "fkItemSectionUser" FOREIGN KEY ("userId") REFERENCES "User" (id);

CREATE TABLE "Item" (
	id bigint GENERATED ALWAYS AS IDENTITY,
	title varchar(50) NOT NULL,
	description varchar(255),
	target smallint,
	"sectionId" bigint,
	"valueType" "ValueType" NOT NULL,
	"valueAssessment" boolean,
	visible boolean DEFAULT TRUE,
	"userId" bigint NOT NULL,
	"createdAt" timestamp WITHOUT time ZONE DEFAULT now(),
	"updatedAt" timestamp WITHOUT time ZONE,
	"deletedAt" timestamp WITHOUT time ZONE
);
ALTER TABLE "Item" ADD CONSTRAINT "pkItem" PRIMARY KEY (id);
ALTER TABLE "Item" ADD CONSTRAINT "fkItemUser" FOREIGN KEY ("userId") REFERENCES "User" (id);
ALTER TABLE "Item" ADD CONSTRAINT "fkItemSection" FOREIGN KEY ("sectionId") REFERENCES "ItemSection" (id);

CREATE TABLE "ItemValue" (
	id bigint GENERATED ALWAYS AS IDENTITY,
	"itemId" bigint,
	value varchar(255),
	"createdAt" timestamp WITHOUT time ZONE DEFAULT now(),
	"updatedAt" timestamp WITHOUT time ZONE,
	"deletedAt" timestamp WITHOUT time ZONE
);
ALTER TABLE "ItemValue" ADD CONSTRAINT "pkItemValue" PRIMARY KEY (id);
ALTER TABLE "ItemValue" ADD CONSTRAINT "fkItemValueItem" FOREIGN KEY ("itemId") REFERENCES "Item" (id);

CREATE TABLE "ValueDetail" (
  id bigint GENERATED ALWAYS AS IDENTITY,
	"itemId" bigint,
  "latestValueAt" timestamp WITHOUT time ZONE, 
	"createdAt" timestamp WITHOUT time ZONE DEFAULT now(),
	"updatedAt" timestamp WITHOUT time ZONE,
	"deletedAt" timestamp WITHOUT time ZONE
);

CREATE TABLE IF NOT EXISTS "Migration" (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  executed_at TIMESTAMPTZ DEFAULT NOW()
);
