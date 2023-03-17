require("dotenv").config();
const express = require("express");
const router = require("./routes/index");

const app = express();

const port = process.env.PORT || 3000;

app.use(router);

async function main() {
  app.listen(port);
  console.log(`Server running on port ${port}`);
}

main();
