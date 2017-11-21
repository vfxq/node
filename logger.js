module.exports = function(module){
	return function(){

		console.log('arguments: ', [].slice.call(arguments));

		var args = [module.filename].concat([].slice.call(arguments));
		console.log.apply(console, args);
	}
}