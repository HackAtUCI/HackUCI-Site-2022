var User = require("./models/User");
var path = require("path");

module.exports = function(app) {
  // Application ------------------------------------------
  app.get("/", function(req, res) {
    res.sendFile(path.resolve("./app/client/build/index.html"));
  });

  // Wildcard all other GET requests to the angular app
  app.get("*", function(req, res) {
    res.sendFile(path.resolve("./app/client/build/index.html"));
  });
};
