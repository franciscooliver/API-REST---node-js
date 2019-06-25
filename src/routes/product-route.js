'use strict'

const express = require('express');
const router = express.Router();

const productController = require('../controllers/product-controller');

router.post('/', productController.post );
router.get('/', productController.get );
router.get('/:slug', productController.getBySlug );
router.get('/admin/:id', productController.getById );
router.get('/tags/:tag', productController.getByTag );
//passagem de parametro
router.put('/:id', productController.put );
router.delete('/:id', productController.delete );



module.exports = router;