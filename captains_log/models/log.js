// Load mongoose
const mongoose = require('mongoose');

// Add a shortcut to Schema
const Schema = mongoose.Schema;

// Create our Schema
const logSchema = new Schema({
    title: { type: String, required: true},
    entry: { type: String, required: true},
    shipIsBroken: {type: Boolean, default: true},
},
{timestamps: true});

// Create a Model from our Schema
const Log = mongoose.model('Log', logSchema);

// Export our Model

module.exports = Log;