const express = require("express");

const server = express();

server.get("/", (req, res) => {});
server.get("/products", (req, res) => {});
server.get("/clients", (req, res) => {});
server.get("/suppliers", (req, res) => {});

module.exports = server;
