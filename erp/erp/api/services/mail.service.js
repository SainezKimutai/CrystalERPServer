const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');



function sendInvoiceToClient(reqParam){
    return new Promise((resolve, reject)=>{

        let options = {
            host: "crystaltourskenya.com",
            port: 465,
            auth: {
                user: 'erp@crystaltourskenya.com',
                pass: 'Globaldistruption@2020'
            }
        }

        let transporter = nodemailer.createTransport((options));

        let email = {
            from: reqParam.sender,
            to: reqParam.reciever,
            subject: reqParam.subject,
            html: reqParam.html,
            attachments: [{
                filename: 'QuotationFromCrystalTours.pdf',
                content: reqParam.attachment,
                contentType: 'application/pdf',
                encoding: 'base64'

            }]
        };

        transporter.sendMail(email, function (err, data) {
            !err ? resolve() : console.log(err);
         });

    });
}




 function sendMailToClient(reqParam){
    return new Promise((resolve, reject)=>{

      let options = {
          host: "crystaltourskenya.com",
          port: 465,
          auth: {
              user: 'erp@crystaltourskenya.com',
              pass: 'Globaldistruption@2020'
          }
      }

        let transporter = nodemailer.createTransport((options));

        let email = {
            from: reqParam.sender,
            to: reqParam.reciever,
            subject: reqParam.subject,
            text: reqParam.message
        };

        transporter.sendMail(email, function (err, data) {
            !err ? resolve() : reject('Something went wrong');
         });

    });
}


function inviteUser(reqParam){
    return new Promise((resolve, reject)=>{

      let options = {
          host: "crystaltourskenya.com",
          port: 465,
          auth: {
              user: 'erp@crystaltourskenya.com',
              pass: 'Globaldistruption@2020'
          }
      }

        let transporter = nodemailer.createTransport((options));

        let email = {
            from: reqParam.sender,
            to: reqParam.reciever,
            subject: "Invitation To Crystal Crm",
            text: 'Hello',
            html: 'You have been invited to Crystal CRM. Please click on the link below to register:<br><br> <button style="margin-left:70px;border:none;padding:7px;border-radius:5px;background-color:teal;color:white;"><a style="color:white;font-size:14px;font-family:verdana" href="https://crm-crystaltours.com/register/' + reqParam.reciever + '/' + reqParam.token + '">Invitation</a></button>'
        };

        transporter.sendMail(email, function (err, data) {
            !err ? resolve() : reject('Something went wrong');
         });


    });
}



 module.exports = { sendMailToClient, inviteUser, sendInvoiceToClient }







 //
 // return new Promise((resolve, reject)=>{
 //
 //        let options = {
 //            host: "smtp.gmail.com",
 //            port: 465,
 //            auth: {
 //                user: 'muindegeofrey@gmail.com',
 //                pass: 'Gracemakau2019'
 //            }
 //        }
 //
 //        let transporter = nodemailer.createTransport((options));
 //
 //        let email = {
 //            from: reqParam.sender,
 //            to: reqParam.reciever,
 //            subject: "Invitation To Aidy",
 //            text: 'Hello',
 //            html: 'You have been invited to Aidy. Please click on the link below to register:<br><br> <button style="margin-left:70px;border:none;padding:7px;border-radius:5px;background-color:teal;color:white;"><a style="color:white;font-size:14px;font-family:verdana" href="http://localhost/register/' + reqParam.reciever + '/' + reqParam.token + '">Invitation</a></button>'
 //        };
 //
 //        transporter.sendMail(email, function (err, data) {
 //            !err ? resolve() : reject('Something went wrong');
 //         });
 //
 //
 //    });
