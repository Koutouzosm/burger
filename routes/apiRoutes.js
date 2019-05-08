const burgers = require("../models/burgers.js");

// Gets all burgers
module.exports = (app) => {
  app.get("/api/burgers", function(req, res) {
    burgers.findAll()
    .then(dbBurgerData => res.json(dbBurgerData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
  });

//   creats/POST new burger
  app.post("/api/burgers", function(req, res) {
    burgers.create(req.body)
    .then(dbBurgerData => res.json(dbBurgerData))
    .catch (err => {
      console.log(err);
      res.json(err);
    });
  });

//   gets burgers by id
  app.get("/api/burgers/:id", function(req, res) {
    burgers.findById(req.params.id)
    .then(dbBurgerData => res.json(dbBurgerData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
  });

//   updates if burger was devoured or not
  app.put("/api/burgers/:id", function(req, res) {
    burgers.update(req.body.devoured, req.params.id)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

//   deletes burger by id
  app.delete("/api/burgers/:id", function(req, res)  {
    burgers.remove(req.params.id)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });


};