const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const SALT_I = 10;

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  name: {
    type: String,
    required: true,
    maxlength: 100,
  },
  lastname: {
    type: String,
    required: true,
    maxlength: 100,
  },
  cart: {
    type: Array,
    default: [],
  },
  history: {
    type: Array,
    default: [],
  },
  role: {
    type: Number,
    default: 0,
  },
  token: {
    type: String,
  },
});

// eslint-disable-next-line
userSchema.pre('save', function(next) {
  const user = this;
  if (user.isModified('password')) {
    // eslint-disable-next-line
    bcrypt.genSalt(SALT_I, (err, salt) => {
      if (err) return next(err); // eslint-disable-next-line
      bcrypt.hash(user.password, salt, (error, hash) => {
        if (error) return next(error);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

// eslint-disable-next-line
userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    return cb(null, isMatch);
  });
};

// eslint-disable-next-line
userSchema.methods.generateToken = function(cb) {
  const user = this;
  const token = jwt.sign(user._id.toHexString(), process.env.SECRET);
  user.token = token;
  user.save(err => {
    if (err) return cb(err);
    return cb(null, user);
  });
};

// eslint-disable-next-line
userSchema.statics.findByToken = function(token, cb) {
  const user = this;
  jwt.verify(token, process.env.SECRET, (err, decode) => {
    // eslint-disable-next-line
    user.findOne({_id: decode, token}, (err, user) => {
      if (err) return cb(err);
      return cb(null, user);
    });
  });
};

const User = mongoose.model('User', userSchema);
module.exports = {
  User,
};
