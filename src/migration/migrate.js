const db = require("../db-config");
async function migrateAndSeed() {
  try {
    console.log("About to migrate and seed db with user");
    await db.raw(
      `create table user (
          id integer not null,
          username varchar not null,
          password varchar not null,
          CONSTRAINT "PK_user" PRIMARY KEY (id),
          CONSTRAINT "UQ_username" UNIQUE (username)
      );`
    );
    await db.raw(
      `insert into user (id, username, password) values (1, 'dummyuser', 'pass123');`
    );
  } catch (error) {
    console.log("Error running migration", error.message);
  }
}

migrateAndSeed().then(() => console.log("Successfully migrated and seeded db"));
