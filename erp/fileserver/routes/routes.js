 
var fileuploadAPI = require("../api/fileupload");
 

var appRouter = function (app){
     
     
    fileuploadAPI(app);
     
    
    app.get("/", function(req, res){
        res.status(200).send("Runing well");

    });
   // console.log(reportAPI.giveusers)
}


module.exports= appRouter;