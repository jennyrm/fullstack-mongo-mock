// build your database
var mongoose = require('mongoose');
var productSchema = require('./schema.js');
var mongoUri = 'mongodb://localhost/ebidProducts';
mongoose.connect(mongoUri, {useNewUrlParser: true});
// allow use of es6 promises
mongoose.Promise = global.Promise;

// Connect Mongoose to our local MongoDB via URI specified above and export it below
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {console.log('Connected to mongoDB!')});

// Register the productSchema with Mongoose as the 'Product' collection.
var Product = mongoose.model('Product', productSchema);

module.exports = Product;