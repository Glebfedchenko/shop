// eslint-disable-next-line
const mongoose = require('mongoose');
const {User} = require('../models/users');

module.exports = {
  register: (req, res) => {
    const user = new User(req.body);
    user.save((err, doc) => {
      if (err) {
        return res.json({success: false, err});
      }
      return res.status(200).json({
        success: true,
        userdata: doc,
      });
    });
  },
  login: (req, res) => {
    User.findOne({email: req.body.email}, (err, user) => {
      if (!user)
        return res.json({
          loginSuccess: false,
          message: 'Auth failed, email not found',
        }); // eslint-disable-next-line
      return user.comparePassword(req.body.password, (err, isMatch) => {
        if (!isMatch)
          return res.json({loginSuccess: false, message: 'Wrong password'}); // eslint-disable-next-line
        return user.generateToken((err, user) => {
          if (err) return res.status(400).send(err);
          return res
            .cookie('w_auth', user.token)
            .status(200)
            .json({loginSuccess: true});
        });
      });
    });
  },
  authenticate: (req, res) => {
    res.status(200).json({
      isAdmin: req.user.role !== 0,
      isAuth: true,
      email: req.user.email,
      name: req.user.name,
      lastname: req.user.lastname,
      role: req.user.role,
      cart: req.user.cart,
      history: req.user.history,
    });
  },
  logout: (req, res) => {
    // eslint-disable-next-line
    User.findOneAndUpdate({_id: req.user._id}, {token: ''}, (err, doc) => {
      if (err) return res.json({success: false, err});
      return res.status(200).send({
        success: true,
      });
    });
  },
};
