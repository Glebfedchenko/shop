const mongoose = require('mongoose');

const {Schema} = mongoose;
const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: 1,
    maxlength: 100,
  },
  subcategory: [
    {
      type: Schema.Types.ObjectId,
      ref: 'SubCategory',
    },
  ],
});

const Category = mongoose.model('Category', categorySchema);
module.exports = {Category};
