const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Oder = new Schema({

    fullname: { type: String },
    numberphone: { type: String },
    address: {type: String},
    city:  {type: String},
    date: { type: Date, default: Date.now },
    slug: { type: String, slug: "name", unique: true },

}, {
    //timestamps: true,

});

module.exports = mongoose.model('Oder', Oder);