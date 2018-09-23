const mongoose = require('mongoose');

const {Schema} = mongoose;
const animalSchema = mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
      unique: 1,
      maxlength: 100,
    },
    description: {
      type: String,
      maxlength: 10000,
    },
    price: {
      required: true,
      type: Number,
      maxlength: 225,
    },
    breed: {
      type: Schema.Types.ObjectId,
      ref: 'Breed',
      required: true,
    },
    color: {
      type: Schema.Types.ObjectId,
      ref: 'Color',
      required: true,
    },
    shipping: {
      required: true,
      type: Boolean,
    },
    available: {
      required: true,
      type: Boolean,
    },
    sold: {
      type: Number,
      maxlength: 100,
      default: 0,
    },
    publish: {
      required: true,
      type: Boolean,
    },
    images: {
      type: Array,
      default: [],
    },
  },
  {timestamps: true},
);

const Animal = mongoose.model('Animals', animalSchema);
module.exports = {
  Animal,
};
