const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions.js");

// Get, all the entries in the database
transactions.get("/", (req, res) => {
  res.json(transactionsArray)
})

// SHOW
transactions.get("/:id", (req, res) => {
  const { id } = req.params;

  if (transactionsArray[id]) {
    res.json(transactionsArray[id]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
})

// CREATE
transactions.post("/", (req, res) => {
  transactionsArray.push(req.body);
  res.status(200).json(transactionsArray);
})

// DELETE
transactions.delete("/:index", (req, res) => {
  const deletedBookmark = transactionsArray.splice(req.params.index, 1);
  res.status(200).json(deletedBookmark);
})

// UPDATE
transactions.put("/:index", async (req, res) => {

  if (transactionsArray[req.params.index]) {
    transactionsArray[req.params.index] = req.body;
    res.status(200).json(transactionsArray[req.params.index]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
})

module.exports = transactions;