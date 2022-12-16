// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 8080; // Step 1

const userroutes = require('./routes/user');
const orderroutes = require('./routes/order');

// Step 2
mongoose.connect('mongodb://localhost/project', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});





// const data={
//     firstname:'siddharthw',
//     lastname:'raow',
//     username:'sid060902w',
//     age:'20w',
//     email:'srkaipa02@gmail.comw',
//     password:'ssssssssw'
// }

// const newuser= new User(data)

// newuser.save((error)=>{
//     if(error) {
//         console.log('error')
//     }
//     else{
//         console.log('data has been saved')
//     }
// })

 // Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// // Step 3

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
// }

app.use(cors())
// HTTP request logger
app.use(morgan('tiny'));
app.use('/user', userroutes);
app.use('/order',orderroutes)



app.listen(PORT, console.log(`Server is starting at ${PORT}`));