const db = require("../models");
const config = require("../config/auth.config");
const Movie = db.movie;
const { QueryTypes } = require('sequelize');

exports.addMovies = (req, res) => {
  Movie.create({
    title: req.body.title,
    description: req.body.description,
    duration: req.body.duration,
    artists: req.body.artists,
    genres: req.body.genres,
    watchURL: req.body.watchURL,
  })
    .then(movie => {
      
      res.send({ message: "Movie upload successfully!" });
        
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.updateMovies = (req, res) => {
  if(req.body.id == ''){
	  res.status(500).send({ message: "movie id not found" });
  }
   Movie.update(
   
   {
        title: req.body.title ,
		description: req.body.description,
		duration: req.body.duration,
		artists: req.body.artists,
		genres: req.body.genres,
		watchURL: req.body.watchURL
    },
    {
        where: 
        {
            id: req.body.id
        }
    }
).then(count => {
    res.send({ message: "Movie update successfully!" });
}).catch(err => {
      res.status(500).send({ message: err.message });
    })
        
};


exports.searchMovies = async (req, res) => {
	var searchby= req.body.searchby;
	const movies = await sequelize.query(
  'SELECT * FROM movies WHERE name LIKE :title',
  {
    replacements: { title: searchby },
    type: QueryTypes.SELECT
  }
);
res.send({ message: "Movie search successfully!", data:movies });
	 
};


exports.getMovies = (req, res) => {
	var page = req.query.page;
    var perpage = req.query.perpage;
	Movie.findAndCountAll({
	  limit: perpage ? Number(perpage) :1,
	  offset: page ? Number(page):1,
	  where: {},
	}).then(movies => {
		res.send({ message: "Movie search successfully!", data:movies });
	}).catch(err => {
      res.status(500).send({ message: err.message });
    })
   
};
















