// server/index.js

const express = require("express");
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3001;

const app = express();
const jsonParser = bodyParser.json()

app.get("/api", (req, res) => {
  res.json({ message: "Saved" });
});

app.post("/save",jsonParser, (req,res) => {
  //code to perform particular action.
  //To access POST variable use req.body()methods.
  console.log(req.body);
  res.json({ message: "Saved" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});