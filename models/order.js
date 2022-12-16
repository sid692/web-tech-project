const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
    name:{
        type:String
    },
    cost:{
        type:String
    },
    cat:{
    type:String
    }
},{
    collection: 'orders'
  })

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;