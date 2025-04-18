const dataService = require('../services/dataService');

const getPosts = async (req, res, next) => {
  try {
    const { type = 'latest' } = req.query;
    const posts = await dataService.getPosts(type);
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPosts
};