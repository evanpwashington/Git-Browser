/***** GitBrowser - Adapter *****/
import DS from 'ember-data';

var GitBrowser = DS.RESTAdapter.extend({
	host	: 'https://api.github.com/',
	//remove pluralized model appended to url by ember and add auth token
	buildURL: function(record, suffix) {
      return this._super() + '?access_token=d19928a74b6b112a4c90e54686725eaa647a2d47';
    },
	//store ratelimit from GET request as meta data
	ajaxSuccess: function(jqXHR, jsonPayload) {
		var meta;
		meta = {
		  rateLimitRemaining: jqXHR.getResponseHeader('X-RateLimit-Remaining')
		};
		this.store.setMetadataFor('GitBrowser', meta);
		return jsonPayload;
	},
});
export default GitBrowser;