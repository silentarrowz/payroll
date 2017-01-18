var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req,res){
	res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/add-employee.html',function(req,res){
    res.sendFile(path.join(__dirname,'/add-employee.html'));
});

app.post('/add-employee.html',function(req,res){
	res.status(200).send();
    console.log('employee '+req.body.name + ' added');
});

app.post('/form',function (req,res){
	//employee details from add-employee.html page
var name=req.body.name;
var designation = req.body.designation;
var pan = req.body.pan;
var aadhar = req.body.aadhar;
var bank = req.body.bank;
var basicSalary = req.body.salary;
var allowance = req.body.allowance;
var esi = req.body.esi;
var uan = req.body.uan;
res.status(200).send('employee ' + name + ' added');
});

app.get('/add-company.html',function(req,res){
     res.sendFile(path.join(__dirname,'/add-company.html'));
});

app.get('/style.css',function(req,res){
    res.sendFile(path.join(__dirname,'/style.css'));
});

app.get('/main.js',function(req,res){
	res.sendFile(path.join(__dirname,'/main.js'));
});

app.get('/cmain.js',function(req,res){
	res.sendFile(path.join(__dirname,'/cmain.js'));
});

var port=8080;
app.listen(8080,function(req,res){
   console.log(`Payroll app listening on port ${port}!` );
});
