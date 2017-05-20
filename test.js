const express = require('express')
const path = require('path')
const proxy = require('express-http-proxy');
const app = express()
//var proxy=require('http-proxy').createProxyServer({});

app.use(express.static(path.join(__dirname, 'public')))
//app.use('/dist',express.static('dist'));
//app.use('/static',express.static('static'));
app.all('*', function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "X-Requested-With");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.header("X-Powered-By",' 3.2.1')  
    res.header("Content-Type", "application/json;charset=utf-8");  
    next();  
});  
//app.get('/api',function(req,res){
   // res.json('Hello,World');
app.use('/api', proxy('http://127.0.0.1:8080'));
//})
app.listen(3001, () => {
  console.log(`App listening at port 3001`)
})