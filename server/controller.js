// Controller here
// complete building out the controller
// var Product = require('../db/');
var helpers = require('../db/dbhelpers.js');

const controller = {
  get: (req, res) => {
    helpers.getProductsHelper()
      .then((data) => {res.status(200).json(data), console.log('RETRIEVED DATA')})
      .catch((err) => {res.status(400).send(err), console.log('ERROR RETRIEVING DATA')})
  },

  post: (req, res) => {
  },

  put: (req, res) => {
    console.log(req.params);
    console.log(req.body);
    helpers.updateProductHelper(req.params, req.body)
      .then(() => {res.status(200).send(), console.log('UPDATED DATA')})
      .catch((err) => {res.status(400).send(err), console.log('ERROR UPDATING DATA')})
  },

  delete: (req, res) => {}
}

module.exports = controller