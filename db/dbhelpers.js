var Product = require('./');
// complete the dbhelpers
var helpers = {
  getProductsHelper: () => Product.find(),
  postProductsHelper: (data) => Product.create(data),
  updateProductHelper: (id, new_bid) => Product.findOneAndUpdate(id, new_bid),
  deleteProductHelper: () => {}
};

module.exports = helpers