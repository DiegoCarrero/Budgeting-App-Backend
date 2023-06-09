const express = require("express");
const app = express();
const cors = require('cors');
const transactionsControllers = require("./controllers/transactionsControllers.js")
app.use(express.json());
app.use(cors());

app.use("/transactions", transactionsControllers)

app.get("/", (req, res) => {
  res.send("Welcome to the Budgeting App");
})

//404 page
app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
})

module.exports = app;