module.exports = (sequelize, Sequelize) => {
  const Vote = sequelize.define("user_vote", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    user_id: {
      type: Sequelize.INTEGER
    },
    movie_id: {
      type: Sequelize.INTEGER
    },
    vote: {
      type: Sequelize.STRING
    }

  });
  
  

  return Vote;
};
