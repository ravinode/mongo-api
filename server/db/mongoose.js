var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://ds129013.mlab.com:29013/heroku_4hp1l787');

module.exports = {mongoose};
