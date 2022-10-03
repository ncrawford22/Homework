const mongoose = require('mongoose');

function mongooseConfig() {
    mongoose.connect(process.env.MONGO_DB);
    mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB!');
    });
}

module.exports = mongooseConfig;