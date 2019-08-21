const nodemailer = require('nodemailer');
const env = require('dotenv').config()

exports.send = (email) => {
   
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
            user:  process.env.EMAIL_USERNAME, // generated ethereal user
            pass:  process.env.EMAIL_PASSWORD// generated ethereal password
        }
    });

    // send mail with defined transport object
    transporter.sendMail({
        from: 'frandosax@gmail.com', // sender address
        to: email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Teste email</b>" // html body
    }, (err, info) => {
        if(err) console.log(err);
        else console.log('Email enviado...');
    });

}
