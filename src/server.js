const express = require('express');
const app = express();
const path = require('path');



app.use('/images',express.static(path.resolve('./images')));
app.get('/',function(req,res){
	res.sendFile(path.resolve('../public/index.html'));
});

app.listen(3001, function () {
  console.log('Example app listening on port 3000!')
})
