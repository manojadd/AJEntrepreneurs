const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wejustrek');
module.exports = mongoose.connection;
