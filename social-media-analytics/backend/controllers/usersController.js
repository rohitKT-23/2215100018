const dataService = require('../services/dataService');

const getTopUsers = async (req, res, next) => {
  try {
    const topUsers = await dataService.getTopUsers();
    res.json(topUsers);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTopUsers
};