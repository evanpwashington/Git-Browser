import Ember from 'ember';

var helper = function(item, options) {
	console.log('handlebar options',options);
	if(typeof item === "object") {
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
};

export default helper;