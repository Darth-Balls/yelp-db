const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  city: {
    type: mongoose.Schema.ObjectId,
    ref: 'City',
    required: [true, 'Please add a city'],
  },
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  rating: {
      type: Number,
      required: [true, 'please rate me'],
  },
  description: {
      type: String,
      required: [true, 'tell me what I am'],
  },
  image: {
      type: String,
      required: true,
  },
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);