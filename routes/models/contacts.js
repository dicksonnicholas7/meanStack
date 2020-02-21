const mongoos = require('mongoose');
const contactSchema = mongoos.Schema({
first_name : {
    required   :true,
    type : String
},
last_name : {
    type : String,
    required : true

},
phone_number : {
    type : String,
    required : false
}

});

const contacts = module.exports = mongoos.model('Contact', contactSchema);