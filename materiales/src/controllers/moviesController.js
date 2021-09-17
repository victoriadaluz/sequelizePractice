const db = require('../database/models/index.js')
const {Op} = require("sequelize");

module.exports={
    list: (req,res)=>{
        db.Movies.findAll()
         .then(movies=> {
            res.render('moviesList',{movies:movies})
        })
    },
    detail: (req,res)=>{
        db.Movies.findByPk(req.params.id)
            .then(movise=>{
                res.render ("moviesDetail", {movie:movie})
            })
    },
    new: (req,res)=>{
        db.Movies.findAll({
            order:[
                ['release_date','DESC']
            ]
        .then(movies =>{            //array q mandamos por viste y el segundo parametro es el callback
            res.render('newestMovies', {movies:movies})
        })
        })
    },
    recommended: (req,res)=>{
        db.Movies.findAll({
            where:{
               rating: {[Op.gt]:8}
            },
            limit:5
        })
        .then(resultado =>{
            res.render('recommmendedMovies'), {movies:movies}
        })
    }
}