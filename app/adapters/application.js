/***** GitBrowser - Adapter *****/
import DS from 'ember-data';

//{{url+}}?access_token=82dd7aab6a4c01a3be52cd628f4073bc28dda554
var GitBrowser = DS.RESTAdapter.extend({
	host	: 'https://api.github.com/',
	//remove pluralized model appended to url by ember
	buildURL: function(record, suffix) {
      return this._super();
    },
	//store ratelimit from GET request as meta data
	ajaxSuccess: function(jqXHR, jsonPayload) {
		var meta;
		console.log(jqXHR, jqXHR.getResponseHeader('X-RateLimit-Remaining'))
		meta = {
		  rateLimit: jqXHR.getResponseHeader('X-RateLimit'),
		  rateLimitRemaining: jqXHR.getResponseHeader('X-RateLimit-Remaining')
		};
		this.store.setMetadataFor('GitBrowser', meta);
		return jsonPayload;
	}
	
	/*headers: {
		
	}*/
});
export default GitBrowser;