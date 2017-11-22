var util = require('util');

var phases = {
	"Hello": "Привет",
	"world": "Мир"
};

function PhraseError (message) {
	this.message = message;
	Error.captureStackTrace(this, PhraseError);
}
util.inherits(PhraseError, Error);
PhraseError.prototype.name = "PhraseError";


function HttpError (status, message) {
	this.status = status;
	this.message = message;
	Error.captureStackTrace(this, HttpError);
}
util.inherits(HttpError, Error);
HttpError.prototype.name = "HttpError";


function getPhrase(name){
	if(!phases[name]) {
		throw new PhraseError(name);
	}

	return phases[name];
}

function makePage(url){
	if(url != 'index.html') {
		throw new HttpError(404, 'Нет такой страницы');
	}

	return util.format("%s, %s!", getPhrase("Hello"), getPhrase("world"));
}

try {
	var page = makePage('index.htmlhh');
	console.log(page);
} catch(e) {
	if( e instanceof HttpError){
		console.error(e.status, e.message)
	} else {
		console.error("Ошибка %s\n сообщение: %s\n стек: %s\n", e.name, e.message, e.stack);
	}
}