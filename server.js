var db = require('db');
db.connect();

var User = require('./user');
var log = require('./logger')(module);

function run(){
	var Vasya = new User('Vasya')
	var Petya = new User('Petya')

	Vasya.hello(Petya)

	log("server: ", db.getPhrase("Run succesfull"))
}

if(module.parent){
	exports.run = run;
}	else {
	run();
}