const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/mypharma';
mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

module.exports = mongoose;