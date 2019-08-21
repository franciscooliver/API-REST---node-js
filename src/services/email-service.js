'use strict'

const config = require('../config');
const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(config.sendgridKey);

exports.sendemail = async (to, subject, body) => {

    const msg = {
        to: to,
        from: 'franciscoalves@velty.com.br',
        subject: subject,
        text:  "teste",
        html: body
    }
    sendgrid.send(msg);
}