const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CalorySchema = new Schema({

    user: String,
    weight:Number,
    calory:Number,
    createdAt: { type: Date, default: Date.now }
})

const Calories = mongoose.model('calories', CalorySchema);

module.exports = Calories;