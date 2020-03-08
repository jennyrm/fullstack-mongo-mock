// Controller here
// complete building out the controller
// var Product = require('../db/');
var helpers = require('../db/dbhelpers.js');

const controller = {
  get: (req, res) => {
    helpers.getProductsHelper()
      .then((data) => {res.status(200).json(data), console.log('RETTRIEVED DATA')})
      .catch((err) => {res.status(400).send(err), console.log('ERROR RETRIEVING DATA')})
  },
  post: (req, res) => {},
  put: (req, res) => {},
  delete: (req, res) => {}
}

module.exports = controller