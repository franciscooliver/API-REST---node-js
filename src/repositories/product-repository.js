'use strict'
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async() => {
    const res = await Product
        .find({
            active: true//filtro
        }, 'title price slug');//campos que serão retornados

    return res;
}

exports.getBySlug = async(slug) => {
    const res = await Product.findOne({
            slug: slug,
            active: true//filtro
        }, 'title price slug');//campos que serão retornados

    return res;
}

exports.getById = async(id) => {
    const res = await Product.findById( id );

    return res;
}

exports.getByTag = async(tag) => {
    const res = await Product.find({
            tags: tag,
            active: true
        });

    return res;
}

exports.create = async(data) => {
    var product = new Product(data);

    //setando campos individualmente (opcional)
    // product.title = req.body.title;
    // product.slug = req.body.slug;
    // product.description = req.body.description;
    // product.price = req.body.price;
    // product.active = req.body.active;
    // product.tags = req.body.tags;

    await product.save();
    
}

exports.update = async(id, data) => {
    await Product
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                price: data.price,
                slug: data.slug
            }
    });
}

exports.remove = async(id) => {
    const res  = await Product
        .findByIdAndRemove( id );

    return res;
}


