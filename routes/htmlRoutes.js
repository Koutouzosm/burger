const burgers = require("../models/burgers.js");

module.exports = (app) => {

    app.get("/", function(req, res) {

        // use burgers.findAll
      burgers
        .findAll()
        // if we get to resolve this .then
        .then(dbBurgerData => {
          res.render("index", {burgerData: dbBurgerData})
        })
        // if this gets rejected catch and log
        .catch(err => {
          console.log(err);
          res.json(err);
        });
    });

};