const express = require('express');
const app = express();
const passport= require('passport');
const auth = require('./routes/auth');
const incomeSources = require('./routes/incomeSources');

require('./middlewares/auth');
require('dotenv').config();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(passport.initialize());

app.use('/', auth);
app.use('/income-sources',  passport.authenticate('jwt', { session : false }),  incomeSources);

//Handle errors
app.use(function(err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    res.json({ error : err.message });
});

app.listen(4000, ()=>{
    console.log('listening to port 4000');
});