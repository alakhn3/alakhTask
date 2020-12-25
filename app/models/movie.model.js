module.exports = (sequelize, Sequelize) => {
  const Movie = sequelize.define("movies", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    duration: {
      type: Sequelize.STRING
    },
    artists: {
      type: Sequelize.STRING
    },
    genres: {
      type: Sequelize.STRING
    },
    watchURL: {
      type: Sequelize.STRING
    },

  });

  return Movie;
};
