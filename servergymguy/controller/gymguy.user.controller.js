
'use strict';
var UserGymGuy = require('../model/gymguy.user.model');
var MeasurementsGymGuy = require('../model/gymguy.measurements.model');



var createUser = function (uName, pass, mobileNum, emailID) {
    
    var entry = new UserGymGuy({
        userName: uName,
        password: pass,
        mobile: mobileNum,
        email: emailID
    });

    entry.save(function (err) {
        if (err) {
            var errMsg = 'Sorry, there was an error saving User info. ' + err;
//            res.render('newnote', { title: 'Standup - New Note (error)', message: errMsg });
            console.log(errMsg);
        } else {
            console.log('User registered');
            // Redirect to the home page to display list of notes...
//            res.redirect(301, '/');
        }
    });
    
};
var createMeasurements = function (userObjectID, userHeight, userWeight) {
    
    var entry = new MeasurementsGymGuy({
        userObjID: userObjectID,
        height: userHeight,
        weight: userWeight
        
    });
    
    entry.save(function (err, userMeasurements) {
        if (err) {
            var errMsg = 'Sorry, there was an error saving User Measurements. ' + err;
            console.log(errMsg);
        } else {
           console.log('measurements saved ' + userMeasurements);
        }
    });
};

var findMeasurement = function (user) {
  
    MeasurementsGymGuy.find({userObjID: user[0]._id},function(err,measurements){
       if(err){
           var errMsg = 'sorry, there was an error finding measurements '+err;
           console.log(errMsg);
       } else{
           console.log('------------------------------');
           console.log(user);
           console.log('------------------------------');
           console.log(measurements);
           console.log('------------------------------');
       }
    });
};

var findAllUsers = function(req,res){
    UserGymGuy.find({},function (err, users){
         if (err) {
           var errMsg = 'Sorry, there was an error finding user ' + err;
           console.log(errMsg);
           res.writeHead(500,{
               'content-Type':'application/json',
               'user-Agent' : 'GymGuy'
           });
           res.write(JSON.stringify(errMsg));
           res.end();
            
       } else {
           
           res.writeHead(200,{
               'content-Type':'application/json',
               'user-Agent' : 'GymGuy'
           });
           res.write(JSON.stringify(users));
           res.end();
       }
    });
};
var findUser = function(req,res){
    var name = req.params['userName'];
    UserGymGuy.find({userName:name},function(err,user){
       
        if (err){
           var errMsg = 'Sorry, there was an error finding user ' + err;
           console.log(errMsg);
           res.writeHead(500,{
               'content-Type':'application/json',
               'user-Agent' : 'GymGuy'
           });
           res.write(JSON.stringify(errMsg));
           res.end();
            
       } else{
           
//           console.log('user id '+user[0]._id);
//           console.log('user details: '+user);
//           console.dir(user);
//           createMeasurements(user[0]._id,170,68);
//           findMeasurement(user);
           
           res.writeHead(200,{
               'content-Type':'application/json',
               'user-Agent' : 'GymGuy'
           });
           res.write(JSON.stringify(user));
           res.end();
       }
    });
};

module.exports.findUser = findUser;
module.exports.findAllUsers = findAllUsers;
//findUser('sandeep');
//createUser('deepu','password','9986108260','deepu@gmail.com');
