const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
// const SmtpTransport = require('nodemailer-smtp-transport');



function sendInvoiceToClient(reqParam){
    return new Promise((resolve, reject)=>{

      let options = {
          host: "crystaltourskenya.com",
          port: 465,
          secure: true,
          auth: {
              user: 'erp@crystaltourskenya.com',
              pass: 'Globaldistruption@2020'
          }
        }

      let transporter = nodemailer.createTransport((options));

        let email = {
            from: reqParam.sender,
            to: reqParam.reciever,
            bcc: reqParam.sender,
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
            !err ? resolve() : console.log(err); reject('Something went wrong');
         });

    });
}




 function sendMailToClient(reqParam){
    return new Promise((resolve, reject)=>{

      let options = {
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
              user: 'grace@crystaltourskenya.com',
              pass: '24705814'
          }
        }

      let transporter = nodemailer.createTransport((options));

        let email = {
            from: reqParam.sender,
            to: reqParam.reciever,
            bcc: reqParam.sender,
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
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
              user: 'grace@crystaltourskenya.com',
              pass: '24705814'
          }
        }

      let transporter = nodemailer.createTransport(options);

        let email = {
              from: reqParam.sender,
              to: reqParam.reciever,
              subject: "Invitation To Crystal Crm",
              html: ' <section style="width: 400px; height: 200px; background-color: #f6f6f6; margin: 20px 100px; border-radius: 2px; border: solid 1px #4ec293; padding: 1em;">' +
                '<div style="font-size: 13px; margin-bottom: 20px;"> Hello </div>' +
                '<div style="font-size: 12px; margin-bottom: 20px;">You have been invited to Crystal CRM. Please click on the invitation button to register.</div>' +
                '<div style="margin-bottom: 20px;">'+
                    '<a style="font-size: 13px; background-color: #4ec293; border-radius: 2px; color: white; border: none; cursor: pointer; padding: 8px;" '+
                    ' href="https://crm-crystaltours.com/register/' + reqParam.reciever + '/' + reqParam.token + '">Invitation</a>'+
                '</div>'+
                '<div style="font-size: 10px; font-style: italic;">www.crystaltourskenya.com</div>'+
              '</section>'
          };


        transporter.sendMail(email, function (err, data) {
            !err ? resolve() : reject('Something went wrong');
         });


    });
}



 module.exports = { sendMailToClient, inviteUser, sendInvoiceToClient }
