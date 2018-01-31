const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
// const User = require('./models/user');
// const Role = require('./models/role');
const router = require('./router');
const cors=require('cors');
const passport = require('passport');
const passportConfig = require('./auth/passport-conf');
const LocalStrategy = require('passport-local').Strategy;


passport.use(new LocalStrategy(passportConfig.login));
passport.serializeUser(passportConfig.serializeUser);
passport.deserializeUser(passportConfig.deserializeUser);


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api', router);
app.use(express.static('public'));

app.use(cors());

// ES6 Promises
mongoose.Promise = global.Promise;
mongoose.connection.openUri('mongodb://localhost/productStore');
mongoose.connection.once('open', ()=>{
    console.log('\nConnected to DB successfully!\n');
    app.listen(3000, ()=>{
        console.log('Server listen on port 3000\n\n');
    });
}).on('error', (err)=>{
    console.log('DB Connection Error: ', err.message);
    process.exit(1);
});

