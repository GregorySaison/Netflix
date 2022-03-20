const express = require("express");
const router = require("./router");

const server = express();
const port = process.env.PORT ?? 3000;

server.set("view engine", "ejs");
server.set("views", "views");
server.use(express.static("public"));
server.use(router);

server.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
