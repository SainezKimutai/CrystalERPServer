var Opportunity = require('./opportunity.model');
 
exports.getMany = (req, res) => {

    var search = {
        name: { $regex: req.query.name, $options: "i" },
        visible: {$regex: req.query.visible, $options: "i"},
        status: {$regex: req.query.status, $options: "i"}
    }

    var query = (req.query.name || req.body.visible || req.body.status) ? search: {};
    Opportunity.find(query).sort({name: 1}).exec
    (function (err, opps) {
            if(err){
                return res.status(500).json(err);
            }
            res.status(200).json(opps);
    }
    )

}

exports.getOne = (req, res) => {

    Opportunity.findById(req.params.id, function (err, opp) {
        if(err) {
            return res.status(500).json(err);
        }
        if(!opp){
            return res.status(404).json('Not found.');
        }
        res.status(200).json(opp);
    });

}

exports.add = (req, res) => {
    var opp = new Opportunity({
        name: req.body.name,
        visible: req.body.visible,
        status: req.body.status
        
    });
  
    opp.save(function(err, result) {
        if(err) {
            return res.status(500).json(err);
        }
        res.status(201).json(result);
    });
}

exports.edit = (req, res) => {

    Opportunity.findById(req.params.id, function (err, opp) {
        if(err) {
            return res.status(500).json(err);
        }
        if(!opp) {
            return res.status(404).json(err);
        }
         
        opp.name = req.body.name || opp.name,
        opp.visible = req.body.visible || opp.visible,
        opp.status = req.body.status || opp.status
         
        opp.save(function(err, result) {
            if(err) {
                return res.status(500).json(err);
            }
            res.status(201).json(result);
        });
    });

}

exports.delete = (req, res) => {

    Opportunity.findById(req.params.id, function (err, opp) {
        if(err) {
            return res.status(500).json(err);
        }
        if(!opp) {
            return res.status(404).json(err);
        }
        opp.remove(function(err, result) {
            if(err) {
                return res.status(500).json(err);
            }
            res.status(204).json(result);
        });
    });  

}