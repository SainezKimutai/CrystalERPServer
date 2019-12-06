const Invoice = require("../invoice/invoice.model.js").Invoice;
const fs = require('fs');

async function create(invoiceParam){
    const invoice = new Invoice(invoiceParam);
    await invoice.save();
    return Invoice.findOne({ _id: invoice._id });

}

async function getAll() {
    return await Invoice.find({});
}

async function getOne(_id) {
    return Invoice.findById(_id);
}

async function update(id, invParam) {
    let Inv = await Invoice.findById(id);


    if (!Inv) throw 'Invoice not Found';


    Object.assign(Inv, invParam);

    await Inv.save();

    return await  Invoice.findById(id);

}

async function _delete(id) {
    await Invoice.deleteOne({_id: id});
}

async function upload(req, res) {

  return new Promise((resolve, reject)=>{
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
  let sampleFile = req.files.sampleFile;
  let nameTheFile = Date.now()+sampleFile.name;
  let fullDirectory = __dirname+'/../../public/itineraryImages/'+nameTheFile;

  sampleFile.mv(fullDirectory, function(err) {

    if(!err){
      resolve(nameTheFile)

    }
    if(err){
       console.log(err)
    }

  });


  });
}

async function remove(req, res) {
  return new Promise((resolve, reject)=>{
    let fileName = req;
    let fileDirectory = __dirname+'/../../public/itineraryImages/'+fileName;
      fs.unlink(fileDirectory,function(err){
           if(err) return console.log(err);
           resolve('File deleted successfully')
      });
  });
}

module.exports = { create, getAll, getOne, update, delete: _delete, upload, remove };
