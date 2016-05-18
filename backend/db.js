/**
 * Created by godfr on 5/14/2016.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/social',function(){
    console.log('mongodb connected');

})

module.exports=mongoose;