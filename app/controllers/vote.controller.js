const db = require("../models");
const config = require("../config/auth.config");
const Vote = db.vote;
const User = db.user;
const Movie = db.movie;
const { QueryTypes } = require('sequelize');

exports.addMoviesVote = (req, res) => {
  Vote.create({    
    user_id: req.body.user_id,
    movie_id: req.body.movie_id,
    vote: req.body.vote,
  }).then(movie => {      
      res.send({ message: "Vote for Movie successfully!" });        
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.unVoteMovie = (req, res) => {
  Vote.destroy({
   where: {
      id: req.body.vote_id
   }
}).then(movie => {      
      res.send({ message: "Un Vote for Movie successfully!" });        
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.mostVotedMovie = async (req, res) => {
	Vote.findAll({
  attributes: [
    'movie_id',
    [db.sequelize.fn('COUNT', db.sequelize.col('movie_id')), 'count']
  ],
  group: 'movie_id',
  raw: true,
  logging: true
}).then(data => {
	const item = data.reduce((prev, current) => (+prev.count > +current.count) ? prev : current)
	Movie.findOne({
		where: {
		  id: item.movie_id
		}
	  }).then( moviedata =>{
		  res.send({ message: "Most voted Movie get successfully!" , Most_voted_movie: moviedata}); 
	  }).catch(err => {
		  res.status(500).send({ message: err.message });
		});
  
}).catch(err => {
      res.status(500).send({ message: err.message });
    });
	
	
};


exports.votedMovieList = async (req, res) => {
	Vote.findAll({
	  where: {},
	}).then(vote => {
		
		res.send({ message: "Movie search successfully!", data:vote });
	}).catch(err => {
      res.status(500).send({ message: err.message });
    })
	/*
	User.belongsToMany(Team, {
  through: 'user_vote',
  foreignKey: 'id',
  otherKey: 'user_id'
});

Movie.belongsToMany(User, {
  through: 'user_vote',
  foreignKey: 'id',
  otherKey: 'movie_id'
});
	Vote.findAll({
  include: [
    {
      model: User, 
      include: [
        Movie
      ]  
    }
  ]
}).then(vote => {
		
		res.send({ message: "Movie search successfully!", data:vote });
	}).catch(err => {
      res.status(500).send({ message: err.message });
    })
	*/
	
	
};





