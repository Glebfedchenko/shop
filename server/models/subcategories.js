const mongoose = require('mongoose');

const {Schema} = mongoose;
const subcategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: 1,
    maxlength: 100,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
});

const SubCategory = mongoose.model('SubCategory', subcategorySchema);
module.exports = {SubCategory};
