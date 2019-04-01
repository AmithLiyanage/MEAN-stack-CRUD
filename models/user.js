const mongoose = require('mongoose');

var User = mongoose.model('User', {
  name: { type: String },
  position: { type: String},
  equipment: { type: String},
  time: { type: Number},
  damage: { type: String},
});

module.exports = { User };