
var rBind = function(func, context, args){
	return function(){
		var origArgs = Array.prototype.slice.call(arguments);
		return func.apply(context, origArgs.concat(args));
	};
};

module.exports = rBind;