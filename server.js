const express = require('express');
const mongoose = require('mongoose');

const items = require('./routes/api/items');

const app = express();

// body-parser middelware
app.use(express.json());

// db config
const db = require('./config/keys').mongoURI;

// connect to mongodb
mongoose.connect(db)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.err(err));

// use routes - anything that goes to api/items should refer to items variable
app.use('/api/items', items);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));