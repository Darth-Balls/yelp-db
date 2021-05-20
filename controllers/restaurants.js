const mongoose = require("mongoose");
const Restaurant = require('../models/Restaurant');
const City = require('../models/City');


const getRestaurants = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.find();

    res.json({
      success: true,
      msg: 'show all restaurants',
      data: restaurants,
    })  
  } catch(err) {
    next(err)
  }

}

const getRestaurant = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const restaurant = await Restaurant.findById(id);
    res.json({
      success: true,
      msg: 'show selected restaurant',
      data: restaurant,
    })
  } catch(err) {
    next(err)
  }

}

module.exports = {
  getRestaurant,
  getRestaurants,
 }