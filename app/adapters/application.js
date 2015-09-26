/***** GitBrowser - Adapter *****/
import DS from 'ember-data';

//{{url+}}?access_token=82dd7aab6a4c01a3be52cd628f4073bc28dda554
var GitBrowser = DS.RESTAdapter.extend({
	//url: 'https://api.github.com/',
	host	: 'https://api.github.com/',
	buildURL: function(record, suffix) {
		//remove pluralized model appended to url by ember
      return this._super();
    }
	
	/*headers: {
		
	}*/
});
export default GitBrowser;