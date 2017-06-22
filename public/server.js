const express = require('express');
const app = express();
const path = require('path');
const bodyParser= require('body-parser');
let eventRouter = require('../src/routes/event.routes.js');

app.use('/images',express.static(path.resolve('../src/images')));
app.use(bodyParser.json());

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	console.log('inside cors',req.body);
  	//console.log('inside cors',req);

  	next();
})



app.use('/api',eventRouter);

app.get('/',function(req,res){
	res.sendFile(path.resolve('../public/index.html'));
});


app.listen(3001, function () {
  console.log('Example app listening on port 3000!')
})
