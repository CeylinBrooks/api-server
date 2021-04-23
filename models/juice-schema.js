'use strict';

const mongoose = require('mongoose');

const juiceSchema = mongoose.Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true} ,
  type: { type: String, uppercase: true, enum: ['JUICE'] }
});

const juiceModel = mongoose.model('food', juiceSchema);

module.exports = foodModel;