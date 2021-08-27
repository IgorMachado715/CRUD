const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_HOST || 'mongodb://localhost/crud-aula')
mongoose.Promise = global.Promise;

module.exports = mongoose;