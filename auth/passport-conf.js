// const mongoose = require('mongoose');
// const userSchema = require('../models/user');
const User = require('../models/user');

const passportHandlers = {
    login: (username, password, done) => {
        console.log('passportHandlers login func');
        User.findOne({username}, (err, user) => {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, {message: 'User not found'});
            }
            if (user.password !== password) {
                return done(null, false, {message: 'Incorrect password'});
            }
            return done(null, user);
        });
    },
    serializeUser: (user, done) => done(null, user),
    deserializeUser: (user, done) => done(null, user),
    validatedUser: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        }
        return res.sendStatus(401);
    }
};

module.exports = passportHandlers;
