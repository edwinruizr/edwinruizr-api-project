var express = require('express');

var app = express();
app.use('/',express.static(__dirname + '/public'));
app.get('/:time', function(req, res){
    var time = req.params.time;
    var date, timeNum,month;
    var dateObject = {};
    
    if(!isNaN(parseInt(time,10))){
        timeNum = parseInt(time,10);
       // console.log(timeNum);
        date = new Date(timeNum*1000);
        //console.log(date);
    }else{
        date = new Date(time);
        
    }
    switch (date.getMonth()){
        case 0: month = "January";break;
        case 1: month = "February";break;
        case 2: month = "March";break;
        case 3: month = "April";break;
        case 4: month = "May";break;
        case 5: month = "June";break;
        case 6: month = "July";break;
        case 7: month = "August";break;
        case 8: month = "September";break;
        case 9: month = "October";break;
        case 10: month = "November";break;
        case 11: month = "December";break;
    }
    dateObject.unix = date.getTime() / 1000;
    dateObject.natural = month +" "+ date.getDate()+", "+date.getFullYear();
    
    
    if(!isNaN(new Date(time)) && !isNaN(parseInt(time,10)) || isNaN(date.getDate())){
            dateObject.unix = null;
            dateObject.natural = null;
        }
    res.json(dateObject);
    res.end();
});

app.listen(process.env.PORT, process.env.IP,function () {
  console.log('Go to Window > Share > open Application!');
});