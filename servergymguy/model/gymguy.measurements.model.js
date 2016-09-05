var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


//var userNameValidator = [
//    function(val){
//        return (val.length > 0 && val.length<23);
//    },
//    //custom error message
//    'Username should be lessthan 22 characters'
//];
//

var measurementsGymGuy = new Schema({
    
    userObjID: {
        type: Schema.ObjectId,
        required:true
                },
    height : {
        type: Number,
        required : true },
    
    weight : {
        type: Number,
        required : true },
    createdOn: { type: Date, default: Date.now }
    
});

module.exports = mongoose.model('MeasurementsGymGuy',measurementsGymGuy);