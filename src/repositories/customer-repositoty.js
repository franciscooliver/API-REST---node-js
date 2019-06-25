'use strict'
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

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
    
}



