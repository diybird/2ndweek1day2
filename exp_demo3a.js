var express = require('express');
var router = express.Router();

router.get('/home',function(req,res){
res.send("Hello World");
});
router.post('/home', function(req,res){
    res.send("You just call the port method at '/hello'!\n");
});

//export this router to use in exp_demo3b.js
module.exports = router;