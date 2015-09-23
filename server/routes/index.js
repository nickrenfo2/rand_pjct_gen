/**
 * Created by Nick on 9/23/15.
 */
var express = require('express');
var router = express.Router();
var path = require('path');


console.log('inside index.js');








router.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../public/views/index.html'))
});


module.exports = router;