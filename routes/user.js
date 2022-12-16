const express = require('express');
const bcrypt = require('bcryptjs')
const router = express.Router();

const User = require('../models/user');


// Routes
router.get('/', (req, res) => {

    User.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});

router.route('/save').post(async (req, res) => {
    
    console.log('Body: ',req.body)
    const { firstname,lastname,username,age,email,password: plainTextPassword } = req.body
    const password =await bcrypt.hash(plainTextPassword, 10)
    console.log(typeof password)
    try {
        const response = User.create({
            firstname,
            lastname,            
            username,
            age,
            email,
            password

        })
        console.log('User created successfully')

    } catch (error) {
        console.log(error)
        return res.json({ status: 'error' })
    }

    res.json({ status: 'ok' })
    

    
 });


 router.route('/login').get((req, res) => {
    User.findOne({ username: req.query.username })
        .then(user => {
            if (user === null) {
                res.send(null);
            }
            else {
                bcrypt
                    .compare(req.query.password, user.password)
                    .then(result => res.send(result))
                    .catch(err => console.error(err.message));
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;