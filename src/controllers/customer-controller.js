'use strict'

const ValidationContract = require('../validator/fluent-validator');//validador dos campos
const customer_repository = require('../repositories/customer-repositoty');
const md5 = require('md5');

exports.post = async(req, res, next) => {
    let contract  = new ValidationContract();
    contract.hasMinLen(req.body.name, 3, "O Nome deve  conter pelo menos 3 caracteres");
    contract.isEmail(req.body.email, "E-mail inválido");
    contract.hasMinLen(req.body.password, 6, "A senha deve  conter pelo menos 6 caracteres");

    if(!contract.isValid() ){
        res.status(400).send({ errors: contract.errors()}).end();
        return;
    }

    try {
        await customer_repository.create({
            name: req.body.name,
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY)

        });

        res.status(201).send({
            message: "Cliente cadastrado com sucesso!"
        });
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

