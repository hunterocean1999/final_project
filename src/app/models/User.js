const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const UserSchema = new mongoose.Schema(
{ 
  name: {type: String,required: true},
  email: {type: String,required: true},
  password: {type: String,required: true},
  date: { type: Date,default: Date.now},
  slug: { type: String, slug: "email", unique: true }

}, {
    //timestamps: true,

});

const User = mongoose.model('User', UserSchema);

module.exports = User;
