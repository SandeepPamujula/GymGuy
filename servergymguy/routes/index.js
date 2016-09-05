
var express = require('express'),
    path = require('path'),
    router = express.Router(),
    gymguyUserCtrl = require('../controller/gymguy.user.controller.js');

//console.log(__dirname);
//path.resolve(__)
router.get('/user/:userName',function(req,res){
    
    gymguyUserCtrl.findUser(req,res);
});

router.get('/', function (req, res) {
  res.send('Hello World!');
});

module.exports = router;