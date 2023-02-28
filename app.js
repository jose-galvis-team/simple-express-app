const express = require("express");

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});

app.get("/health", (req, res) => {
  res.send("Server up and running !");
});
