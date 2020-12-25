const { authJwt } = require("../middleware");
const movieController = require("../controllers/movie.controller");
const voteController = require("../controllers/vote.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/add-movies-vote", [authJwt.verifyToken], voteController.addMoviesVote );
  app.post("/api/movies-unvote", [authJwt.verifyToken], voteController.unVoteMovie );
  app.get("/api/voted-movies-list", [authJwt.verifyToken], voteController.votedMovieList );
  app.get("/api/most-voted-movies", [authJwt.verifyToken], voteController.mostVotedMovie );
  
  app.post("/api/add-movies", [authJwt.verifyToken], movieController.addMovies );
  app.post("/api/update-movies", [authJwt.verifyToken], movieController.updateMovies );
  app.post("/api/search-movies", [authJwt.verifyToken], movieController.searchMovies );
  app.get("/api/get-movies", [authJwt.verifyToken], movieController.getMovies );
  //app.get("/api/get-most-watch-movies", [authJwt.verifyToken], movieController.getMostWatchMovies );

  

  
};
