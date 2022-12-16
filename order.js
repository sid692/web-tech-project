const express = require('express');

const router = express.Router();

const Order = require('../models/order');

router.get('/', (req, res) => {

    Order.find({  })
        .then((data) => {
            console.log('Orders: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});

router.route('/save').post(async (req, res) => {
    
    console.log('Body: ',req.body)
    const { name,cost,cat } = req.body
    
    try {
        const response = Order.create({
            name,
            cost,
            cat        })
        console.log('Order added to cart successfully')

    } catch (error) {
        console.log(error)
        return res.json({ status: 'error' })
    }

    res.json({ status: 'ok' })
    

    
 });

 router.route('/delete').delete((req,res)=>{
    Order.deleteMany({}).then(()=>console.log("deleted all orders"))
 })

module.exports=router;