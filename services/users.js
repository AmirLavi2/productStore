const User = require('../models/user');


module.exports = {
    login: (req, res) => {
        let email = req.body.email;
        let password = req.body.password;
        User.findOne({email: email, password: password}, (err, user) => {
            if (err) throw err;
            if (!user) {
                return res.json({message: 'user not found'});
            }
            console.log(user.fname, 'connected to the store');
            return res.json(user);
        });
    },
    register: (req, res) => {
        let user = req.body;
        let u = new User(user);
        u.save((err, user) => {
            if (err) throw err;
            console.log(user.fname, 'register to the store');
            return res.json(user);
        });
    }
};




