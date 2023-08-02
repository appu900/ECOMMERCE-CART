const express = require("express");
const cors = require("cors");
const products = require("./product");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  
  response.send("hey appu");
});

app.get("/products", (request, response) => {
  response.json(products);
});

app.listen(5000, () => {
  console.log("server is live..");
});
