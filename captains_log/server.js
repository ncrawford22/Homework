const express = require('express');
const app = express();
require('dotenv').config();
const mongooseConfig = require('./config');
const methodOverride = require('method-override');

const PORT = process.env.PORT;

// View Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

// Routes
app.use('/logs', require('./routes/logRoutes'));

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));

mongooseConfig();