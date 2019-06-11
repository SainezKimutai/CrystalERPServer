var nodemailer = require('nodemailer');

exports.sendemail = (receiver, credentials, content) =>
 { 
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: credentials.email,
               pass: credentials.id
           }
       });

    const mailOptions = {
        from: credentials.email,  
        to: receiver,  
        subject: content.subject,  
        html: content.message
    };
    transporter.sendMail(mailOptions, function (err) {
        if(err)
          console.log(err)
     });

 }