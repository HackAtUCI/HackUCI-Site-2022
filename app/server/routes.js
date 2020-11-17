var User = require("./models/User");
var path = require("path");

module.exports = function(app) {
  // Application ------------------------------------------
  app.get("/", function(req, res) {
    res.sendFile(path.resolve("./app/client/build/index.html"));
    // res.sendFile("./app/client/build/index.html");
  });

  app.get("/admin", function(req, res) {
    res.sendFile(path.resolve("./app/legacy/index.html"));
    // res.sendFile("./app/legacy/index.html");
  });

  app.get("/views/*", function(req, res) {
    res.sendFile(path.resolve("./app/legacy/index.html"));
    // res.sendFile("./app/legacy/index.html");
  });

  // Wildcard all other GET requests to the angular app
  app.get("*", function(req, res) {
    res.sendFile(path.resolve("./app/client/build/index.html"));
    // res.sendFile("./app/client/build/index.html");
  });
};
