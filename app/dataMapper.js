const client = require("./db");

const dataMapper = {
  async findAllTitle() {
    const result = await client.query("SELECT * FROM title;");
    return result.rows;
  },
};

module.exports = dataMapper;
