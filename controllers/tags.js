const mongoose = require("mongoose");


// const Restaurant = require('../models/Restaurant');

const Tag = require('../models/Tag');


const getTags = async (req, res, next) => {
  try {

const getTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const tag = await Tag.findById(id);
    res.json({
      success: true,
      msg: 'show selected Tags',
      data: tag,
    })
  } catch(err) {

    next(err);
  }
};


module.exports = {
  getTag,
  getTags,
 }