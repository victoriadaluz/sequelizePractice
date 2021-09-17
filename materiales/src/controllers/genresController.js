const db = require('../database/models/index.js')
const {Op} = require("sequelize");

module.exports={
    list: (req,res)=>{
        db.Genres.findAll()
         .then(resultado=> {
            res.render('genresList',{genres: resultado})
        })
    },
    detail: (req,res)=>{
        db.Genres.findByPk(req.params.id)
        .then(resultado =>{            //array q mandamos por viste y el segundo parametro es el callback
            res.render('genresDetail', {genre:resultado})
        })
    }
}
