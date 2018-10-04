const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE);
const port = process.env.PORT || 5000;

const userRoutes = require('./routes/users');
const categoryRoutes = require('./routes/categories');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/user', userRoutes);
app.use('/api/categories', categoryRoutes);

// eslint-disable-next-line
app.listen(port, () => console.log(`App running at ${port}`));
