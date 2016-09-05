var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var userNameValidator = [
    function(val){
        return (val.length > 0 && val.length<23);
    },
    //custom error message
    'Username should be lessthan 22 characters'
];


var passwordValidator = [
    function(val){
        return (val.length > 6);
    },
    //custom error message
    'Password should be atleast 6 characters length'
];

var mobileValidator = [
    function(val){
        return (val.length > 8);
    },
    //custom error message
    'mobile number should be atleast 8 characters length'
];
var emailValidator = [
    function(val){
        return ( val.indexOf('@') != -1);
    },
    //custom error message
    'please provide valid email id'
];


var userGymGuy = new Schema({
    
    userName : {
        type: String,
        required : true,
        validate : userNameValidator },
    
    password : {
        type: String,
        required : true,
        validate : passwordValidator },
    mobile : {
        type: String,
        required : true,
        validate : mobileValidator },
    createdOn: { type: Date, default: Date.now },
    email : {
        type: String,
        required : true,
        validate : mobileValidator },
    createdOn: { type: Date, default: Date.now }
    
});

module.exports = mongoose.model('UserGymGuy',userGymGuy);