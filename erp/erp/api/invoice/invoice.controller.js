const invoiceService = require("../services/invoice.service.js");
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');

exports.create = (req, res, next) => {
    invoiceService.create(req.body)
        .then(invoice => res.json(invoice))
        .catch(err => next(err));
};

exports.getAll = (req, res, next) => {
    invoiceService.getAll()
        .then(invoices => { res.json(invoices); })
        .catch(err => next(err));
};

exports.getOne = (req, res, next) => {
    invoiceService.getOne(req.params.id)
        .then(invoice => invoice ? res.json(invoice) : res.status(404).json({ message: 'not found'}))
        .catch(err => next(err));
};

exports.update = (req, res, next) => {
    invoiceService.update(req.params.id, req.body)
        .then((invoice)=> res.json(invoice))
        .catch(err => next(err));
};

exports.delete = (req, res, next) => {
    invoiceService.delete(req.params.id)
        .then(()=> res.json({}))
        .catch(err => next(err));
};

exports.emailinvoice = (req, res)=>{
 
    if (Object.keys(req.files).length == 0) {
        return res.status(400).send('No files were uploaded.');
      }
     let sampleFile = req.files.sampleFile;
     var transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true, 
      auth: {
             user: 'muindegeofrey@gmail.com',
             pass: 'Gracemakau2019'
         }
     });
      const mailOptions = {
      from: 'geofrey@imprintaf.com',  
      to: req.body.to,  
      subject: "Test Invoice",  
      html: ` 
       <html>
       <body>
      <div style="border: 1px solid #ededed; border-radius: 4px; background-color: #ffffff; padding: 20px;">
      <div style="background-color: #e0e0e0; text-align:center;">
           
      </div>
      <h2>Hello, </h2>
      <h2><strong> Attached is a copy of your invoice. Click the confirm button bellow to confirm the contents of the invoice.  </strong></h2>
       <hr>
         <a style ="appearance: button; border: 2px solid green; -webkit-appearance: button; -moz-appearance: button;text-decoration: none;" href=${req.body.link}>Confirm</a>
        <hr>
        <p>Thank you for partnering up with Crystal Tours</p>
        </div>
        <div style="text-align:start; text-align: left;">

        <p> &copy; 2019 <a href="google.com">Crystaltourskenya</a> </p>
        <p> For Inquiries:</p>
        <p> Phone: +254 711 421 684 | Email : geofrey@imprintaf.com </p>
        </div>
        </div>
        </div>
        <br>
        </body>
        </html>
        `,
      attachments: [{
        filename: sampleFile.name,
        content: sampleFile.data,
        contentType: 'application/pdf',
        encoding: sampleFile.encoding
    }]
  }
   transporter.sendMail(mailOptions, function (err) {
    console.log("Called")
      if(err)
        console.log(err)
   });

}