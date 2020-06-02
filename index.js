const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path');

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.get('/',function(req,res){
  res.render(path.join(__dirname+'/modules/index.html'));
});

app.use(express.static(__dirname + '/modules'));


app.listen(port, () => console.log(`Example app listening at port${port}`))