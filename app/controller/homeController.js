const dataMapper = require("../dataMapper");

const homeController = {
  async titleList(__, res) {
    const title = await dataMapper.findAllTitle();
    res.render("home", {
      title,
      pageType: "home",
    });
  },
};

module.exports = homeController;
