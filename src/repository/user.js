const db = require("../db-config");

async function getUsers() {
  const users = await db.raw('select * from "user"');
  return users.rows;
}

async function getUserById(userId) {
  const user = (await db.raw(`select * from "user" u where u.id = ${userId}`)).rows[0];
  if (!user) {
    return `UserId: ${userId} was not found`;
  }
  return user;
}

async function createUser(username, password) {
  await db.raw(
    `insert into "user" (username, password) values ('${username}', '${password}')`
  );
  return 'User created!'
}

async function deleteUser(userId) {
  const user = await getUserById(userId);
  if (!user) {
    return `UserId: ${userId} was not found`;
  }
  await db.raw(`delete from "user" where id = ${userId}`);
  return 'User deleted!'
}

async function updateUser(userId, username, password) {
  const user = await getUserById(userId);
  if (!user) {
    return `UserId: ${userId} was not found`;
  }
  await db.raw(
    `update "user" set username='${
      username || user.username
    }', password='${password || user.password}'`
  );
  return 'User updated!'
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
};
