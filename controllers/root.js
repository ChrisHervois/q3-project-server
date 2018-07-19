const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function (req, res) {
    knex('item').then(results => {
      res.json(results)
    })
  },
  add: function (req, res) {
    knex('item').insert({
      item_name: req.body.item_name,
      item_description: req.body.item_description,
      item_price: req.body.item_price,
      img_url: req.body.img_url,
      user_id: 1
    }).then(() => {
      res.redirect('/');
    })
  },
  edit: function (req, res) {
    knex('item').where('id', req.params.id)
      .update({
        item_name: req.body.item_name,
        item_description: req.body.item_description,
        item_price: req.body.item_price,
        img_url: req.body.img_url
      }).then(() => {
        res.redirect('/');
      })
  },
  delete: function (req, res) {
    knex('item').where('id', req.params.id)
      .del()
      .then(() => {
        res.redirect('/')
      })
  },
}
