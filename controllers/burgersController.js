let express = require("express");

let router = express.Router();


var db = require("../models/");
// var burger = require("../models/burger");


// Import the model (burger.js) to use its database functions.
// let burger = require("../models/burger.js");


// router.get("/", function(req, res) {
//   res.redirect("/burger");
// });

// /<!------------66 fix me ----------------------->/
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  console.log('here');
  db.Burger.findAll({}).then(function(data) {
  // burger.all(function(data) {
    console.log(JSON.stringify(data));
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// should i use db.data? and .then(function(dbData){????})
// for the var hbsObject ={ burger: dbBurger};
// /<!------------66 fix me ----------------------->/

// router.post("/", function(req, res) {
//   db.Burger.create({
//     name: req.body.burger_name
//   }).then(function() {
//     res.redirect("/");
//   });
// });



// router.post("/api/burgers", function(req, res) {
//   // burger.create([
//     db.Burger.create([
//       name: req.body.burger_name
//   ], [
//     req.body.name, req.body.devoured
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });


// /<!------------55 fix me ----------------------->/

router.post("/api/burgers", function(req, res) {
  // burger.create([
    db.Burger.create({
    burger_name: req.body.name
  }).then(function() {
    res.redirect("/");
  });
});
// /<!------------55 fix me ----------------------->/

//     "burger_name", "devoured"
//   ], [
//     req.body.name, req.body.devoured
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });



// this is the original pre sequelize:
// router.post("/api/burgers", function(req, res) {
//   burger.create([
//     "burger_name", "devoured"
//   ], [
//     req.body.name, req.body.devoured
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// /<!------------44 fix me ----------------------->/
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  // burger.update({
    db.Burger.update({
    devoured: req.body.devoured
  }, 
  { where: {id: req.params.id} }).then( function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
// /<!------------44 fix me ----------------------->/
// /<!------------33 fix me ----------------------->/
router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  // burger.delete(condition, function(result) {
  Burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
// /<!------------33 fix me ----------------------->/