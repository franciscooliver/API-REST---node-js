'use strict'
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

const emailSend = require('../services/email')

// exports.get = async() => {
//     const res = await Product
//         .find({
//             active: true//filtro
//         }, 'title price slug');//campos que serão retornados

//     return res;
// }


exports.create = async(data) => {
    var customer = new Customer(data);
    await customer.save();

    console.log(customer.email)
    emailSend.send(customer.email)
    
}



