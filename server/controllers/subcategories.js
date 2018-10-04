// eslint-disable-next-line
const mongoose = require('mongoose');
const {SubCategory} = require('../models/subcategories');
const {Category} = require('../models/categories');

module.exports = {
  addSubcategory: async (req, res) => {
    const {id} = req.params;
    const newSubcategory = new SubCategory(req.body);
    const category = await Category.findById(id);
    newSubcategory.category = category;

    await newSubcategory.save();
    category.subcategory.push(newSubcategory);
    await category.save();
    res.status(200).send(newSubcategory);
  },
  getSubcategoryById: async (req, res) => {
    const {id} = req.params;
    const subcat = await SubCategory.findById(id);
    res.status(200).json(subcat);
  },
  getAllSubcategories: async (req, res) => {
    const subcategories = await SubCategory.find().exec();
    res.status(200).send(subcategories);
  },
};
