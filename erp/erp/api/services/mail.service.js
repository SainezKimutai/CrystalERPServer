const nodemailer = require('nodemailer');


// function sendingMailToClient(reqParam){ 

//     let transporter = await nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 465,
//         secure: true,
//         auth: {
//                user: reqParam.sender,
//                pass: 'saineZ@13'
//            },
//         tls: {
//             rejectUnauthorized: false
//         }
//        });

//     const mailOptions = {
//         from: reqParam.sender,  
//         to: reqParam.reciever,  
//         subject: reqParam.subject,  
//         text: reqParam.message
//     };

//     transporter.sendMail(mailOptions, function (err, data) {
//         if(err){
//             console.log('Error')
//             return false;
//         }else{ 
//             console.log('success')      
//             return true;
//         }

//      });


//  }








 function sendMailToClient(reqParam){

    return new Promise((resolve, reject)=>{

        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                   user: reqParam.sender,
                   pass: 'saineZ@13'
               },
            tls: {
                rejectUnauthorized: false
            }
           });
    
        const mailOptions = {
            from: reqParam.sender,  
            to: reqParam.reciever,  
            subject: reqParam.subject,  
            text: reqParam.message
        };
    
        transporter.sendMail(mailOptions, function (err, data) {
            !err ? resolve() : reject('Something went wrong');
         });
    

    });
}


 module.exports = { sendMailToClient }
