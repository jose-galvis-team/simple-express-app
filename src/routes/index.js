const { Router } = require("express");
const router = Router();

router.get("/health", (req, res) => res.json({ message: "Healthy app !" }));

module.exports = router;
