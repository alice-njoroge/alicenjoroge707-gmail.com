const express = require('express');
const app = express();
const passport= require('passport');
const auth = require('./routes/auth');

require('./middlewares/auth');
require('dotenv').config();


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(passport.initialize());
app.use('/', auth);




app.listen(4000, ()=>{
    console.log('listening to port 4000');
});