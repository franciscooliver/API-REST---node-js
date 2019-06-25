'use strict'

const ValidationContract = require('../validator/fluent-validator');
const product_repository = require('../repositories/product-repository');


//listando produtos
exports.get = async(req, res, next) => {
    try {
        var data = await product_repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: "Falha ao processar sua requisição"
        });
    }
              
}

//retornando produto pelo slug
exports.getBySlug = async(req, res, next) => {
    try {
        var data = await product_repository.getBySlug(req.params.slug);
        res.status(200).send(data);

    } catch (error) {
        res.status(400).send({
            message: 'falha ao processar sua requisição'
        });
    }
        
}

//retornando produto pelo id
exports.getById = async(req, res, next) => {
    try {
        var data = await product_repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send({
            message: 'Falha ao processar sua requisição'
        });
    }
    
 
}

//retornando produtos por tags
exports.getByTag = async(req, res, next) => {
    try {
        var data  = await product_repository.getByTag(req.params.tag);
        res.status(200).send(data);
    }catch (error) {
        res.status(400).send({
            message: 'Falha ao processar sua requisição'
        });
    }
      
        
}

exports.post = async(req, res, next) => {
    let contract  = new ValidationContract();
    contract.hasMinLen(req.body.title, 3, "O título deve  conter pelo menos 3 caracteres");
    contract.hasMinLen(req.body.slug, 3, "O slug deve  conter pelo menos 3 caracteres");
    contract.hasMinLen(req.body.description, 3, "A descrição deve  conter pelo menos 3 caracteres");

    if(!contract.isValid() ){
        res.status(400).send({ errors: contract.errors()}).end();
        return;
    }

    try {
        await product_repository.create(req.body);
        res.status(201).send({
            message: "Produto cadastrado com sucesso!"
        });
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}


//Atualizando um produto
exports.put = async(req, res, next) => {   

    try {
        await product_repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Produto atualizado com sucesso'
        });
    }catch (error) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
   
}


//removendo produto
exports.delete = async(req, res, next) => {
    try {
        await product_repository.remove(req.params.id);
        res.status(200).send({
            message: 'Produto removido com sucesso'
        });
    }catch (error) {
        res.status(400).send({
            message: 'Falha ao remover o produto',
            error: e
        });
    }
    
}
