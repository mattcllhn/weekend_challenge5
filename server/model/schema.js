var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var petSchema = new Schema({
  name: String,
  animal: String,
  age: Number,
  url: String

});

var addPet = mongoose.model('pet', petSchema);

module.exports = addPet;
