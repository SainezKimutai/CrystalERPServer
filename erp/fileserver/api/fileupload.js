const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
var fs = require('fs');


var fileuploadApi = function (app)
{
// default options
app.use(fileUpload());

app.get('/file', (req, res)=>{
  res.sendFile(__dirname+'/index.html')
})


app.post('/upload', function(req, res) {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
  let sampleFile = req.files.sampleFile;
  sampleFile.mv('../fileserver/files/'+sampleFile.name, function(err) {
    if (err) 
      return res.status(500).send(err);
    res.send('File uploaded!');
  });
});

app.get('/view', function(req, res){
fs.readdir('../fileserver/files/', function(err, items) {
  res.send(items);
})
})


}
module.exports = fileuploadApi;