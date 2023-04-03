require("dotenv").config();
const morgan = require("morgan");
const express = require("express");

const router = require("./routes/index");

const app = express();

const port = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

async function main() {
  app.listen(port);
  console.log(`Server running on port ${port}`);
}

main();
