const express = require("express");
const productsRouter = require("../products/products-router");

const server = express();

//global middleware
server.use(express.json());

server.use(".products", productsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});
server.get("/products", (req, res) => {});
server.get("/clients", (req, res) => {});
server.get("/suppliers", (req, res) => {});

module.exports = server;
