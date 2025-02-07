const mongoose = require('mongoose');

function connecttodb() {
    mongoose.connect('mongodb://localhost:27017')
        .then(() => {
            console.log('Connected to DB');
        })
        .catch(err => {
            console.log('Error connecting to DB:', err);
        });
}

module.exports = connecttodb;
