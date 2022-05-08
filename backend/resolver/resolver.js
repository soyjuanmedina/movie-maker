const Movie = require('../model/model');

const resolvers = {
  movies: () => {
    return "Helllo from movies"
  }
}

module.exports = resolvers;