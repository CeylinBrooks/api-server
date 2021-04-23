'use strict';

const mongoose = require('mongoose');

const GenericCollection = require('./models/generic-collection.js');
const juice = new GenericCollection();

const MONGODB_URI = 'mongodb://localhost:27017/juice';

const options = { userNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(MONGODB_URI. options);

const databaseInteractions = async () => {

  let apple = {
    name: 'beverage',
    calories: 100,
    type: 'LIQUID'
  };

  let orange = {
    name: 'drink',
    calories: 150,
    type: 'LIQUID'
  };
  
  let newJuice = await juice.create(apple);
  let moreJuice = await juice.create(orange);

  console.log('create:', newJuice);
  console.log('create:', moreJuice);
  
  let oneJuice = await juice.read(newJuice._id);
  console.log('Add another juice please', oneJuice);
  
  let allJuices = await juice.read();
  console.log(allJuices);

  let extraJuices = await juice.update();
  console.log(extraJuices);
}

databaseInteractions();