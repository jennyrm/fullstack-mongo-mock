var Product = require('./');
// complete the dbhelpers
var helpers = {
  getProductsHelper: () => Product.find(),
  postProductsHelper: (data) => Product.create(data),
  updateProductHelper: () => {},
  deleteProductHelper: () => {}
};

module.exports = helpers