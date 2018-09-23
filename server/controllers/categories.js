// eslint-disable-next-line
const mongoose = require('mongoose');
const {Category} = require('../models/categories');

module.exports = {
  addCategory: (req, res) => {
    const category = new Category(req.body);
    category.save((err, doc) => {
      if (err) return res.json({success: false, err});
      return res.status(200).json({
        success: true,
        category: doc,
      });
    });
  },
  getAllCategories: (req, res) => {
    Category.find()
      .exec()
      .then(docs => {
        if (docs.length > 0) {
          res.status(200).send(docs);
        } else {
          res.status(400).json({message: 'There are no categories available'});
        }
      })
      .catch(err => {
        res.status(400).json({
          error: err,
        });
      });
  },
  getCategoryById: (req, res) => {
    const {id} = req.params;
    Category.findById(id)
      .exec()
      .then(doc => {
        res.status(200).send(doc);
      })
      .catch(err => {
        res.status(400).json({
          error: err,
        });
      });
  },
};
