let express = require("express");
let bodyParser = require("body-parser");

let PORT = process.env.PORT || 8080;

var app = express();
var db = require("./models");


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(process.cwd() + "/public"));
// app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgersController.js");

 //app.use("/", routes);
app.use(routes);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function() {

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
});