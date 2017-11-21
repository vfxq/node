var db = require('db');
db.connect();

var User = require('./user');


function run(){
	var Vasya = new User('Vasya')
	var Petya = new User('Petya')

	Vasya.hello(Petya)

	console.log("server: ", db.getPhrase("Run succesfull"))
}

if(module.parent){
	exports.run = run;
}	else {
	run();
}