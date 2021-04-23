'use strict';

const juiceSchema = require('./juice-schema.js');

class GenericCollection {
  constructor() {
    this.model = juiceSchema;
  }
  create(record) {
    let newRecord = new this.model(record);
    return newRecord.save();
  }

  read(_id) {
    if (_id) {
      return this.model.findOne({ _id });
    } else {
      return this.model.find({});
    }
  }

  update(_id, record) {
    return this.model.findByIdAndUpdate(_id, record, { new: true})
  }
}

module.exports = GenericCollection;