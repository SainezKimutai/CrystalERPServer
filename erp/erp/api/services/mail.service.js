const nodemailer = require('nodemailer');

 'use strict';
async function sendMailToClient(reqParam){ 

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
               user: 'kimutai@imprintaf.com',
               pass: 'saineZ@13'
           },
        tls: {
            rejectUnauthorized: false
        }
       });

    const mailOptions = {
        from: 'kimutai@imprintaf.com',  
        to: 'sainezamon@gmail.com',  
        subject: 'TESTING',  
        text: 'Hello sainez'
    };
    transporter.sendMail(mailOptions, function (err, data) {
        if(err){
            console.log(err)
        }else{
            console.log('Success')
            return;
        }

     });

 }

 module.exports = { sendMailToClient }
