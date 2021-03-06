const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
});

module.exports = mongoose.model('Tag', TagSchema);