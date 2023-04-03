const db = require("../db-config");

async function migrateAndSeed() {
  try {
    console.log("About to migrate and seed db with user");
    await db.raw(
      `create table "user" (
          id serial,
          username varchar not null,
          password varchar not null,
          CONSTRAINT "PK_user" PRIMARY KEY (id),
          CONSTRAINT "UQ_username" UNIQUE (username)
      );`
    );
    await db.raw(
      `insert into "user" (username, password) values ('dummyuser', 'pass123');`
    );
    console.log("Successfully migrated and seeded db");
  } catch (error) {
    console.log("Error running migration", JSON.stringify(error));
  }
  process.exit();
}

migrateAndSeed();
