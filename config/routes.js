//Update the name of the controller below and rename the file.
const root = require("../controllers/root.js")
module.exports = function(app){

  app.get('/', root.index);
}
