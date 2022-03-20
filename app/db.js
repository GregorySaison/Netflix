const { Client } = require("pg");

const client = new Client(
  `postgresql://${process.env.DB_USER}:${process.env.DB_MDP}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
);

client.connect();

module.exports = client;
