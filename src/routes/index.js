const { Router } = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
} = require("../repository/user");
const router = Router();

router.get("/health", (req, res) => res.json({ message: "Healthy app !" }));
router.get("/user", async (req, res) => {
  const users = await getUsers();
  res.json({ users });
});
router.get("/user/:userId", async (req, res) => {
  const user = await getUserById(req.params.userId);
  res.json({ user });
});
router.post("/user", async (req, res) => {
  const user = await createUser(req.body.username, req.body.password);
  res.json({ user });
});
router.patch("/user/:userId", async (req, res) => {
  const user = await updateUser(
    req.params.userId,
    req.body.username,
    req.body.password
  );
  res.json({ user });
});
router.delete("/user/:userId", async (req, res) => {
  const deletedUser = await deleteUser(req.params.userId);
  res.json({ deletedUser });
});

module.exports = router;
