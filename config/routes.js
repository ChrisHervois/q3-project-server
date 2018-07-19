//Update the name of the controller below and rename the file.
const root = require("../controllers/root.js")
module.exports = function(app){

  app.get('/', root.index);
  app.post('/add', root.add)
  app.post('/edit/:id', root.edit)
  app.post('/delete/:id', root.delete)
}
