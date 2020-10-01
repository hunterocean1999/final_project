const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Course = new Schema({

    name: { type: String },
    price: { type: String },
    brand: {type: String},
    image: { type: String },
    description: {type: String},
    date: { type: Date, default: Date.now },
    slug: { type: String, slug: "name", unique: true },

}, {
    //timestamps: true,

});

module.exports = mongoose.model('Course', Course);