const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        // unique: true,
        // trim: true,
      },
    lastname: {
        type: String,
        required: true,
        // unique: true,
        // trim: true
      },  
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
      },
    email: {
        type: String,
        required: true,
        unique: true
      },
    age: {
        type: String,
        required: true,
        
      },
    password: {
        type: String,
        required: true,
        minlength: 8
      },
    cart:
    {
      type:[String],
      default:[]
    }
});

// Model
const User = mongoose.model('User', UserSchema);

module.exports =  User;