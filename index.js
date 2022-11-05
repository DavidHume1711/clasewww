const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hola Felipe!");
});

app.get("/endpoint1", (req, res) => {
  res.send("Hola JuanD!");
});

app.get("/endpoint2", (req, res) => {
  res.send("Hola Juanes!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
