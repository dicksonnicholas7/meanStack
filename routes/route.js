var express = require('express');
var routes = express.Router();

var Contact = require('./models/contacts');


routes.get('/contacts',
function (req,res,next) {
    Contact.find(
        function (err,contacts) {
            res.json(contacts);
        }
    );
}
);


routes.post('/contacts',
function (req,res,next) {
  let newContact = new Contact({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
   // phone: req.body.phone
  });
  console.log(newContact);

newContact.save(function (err,contact) {

    if(err){
        res.json({msg : 'error' + err});
    }else{
        res.json({msg : 'saved successfully'});
    }
    
});


}
);

routes.put('/contacts',
function (req,res, next) {
    
}
);

routes.delete('/contacts/:id',
function (req,res) {
    Contact.remove({_id : req.params.id}, 
        function (err, result) {
            if(err){
                res.json(err);
            }
            else{
                res.json(result);
            }
        }
        );
}
);

module.exports = routes;