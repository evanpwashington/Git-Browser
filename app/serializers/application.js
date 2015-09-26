/***** GitBrowser - serializer *****/
import DS from 'ember-data';

var GitBrowser = DS.RESTSerializer.extend({
	//necessary to convert data from api to ember-friendly object
	normalizePayload: function(type, payload) {
		var count 		= 0,
			normData 	= {"gitBrowser": []};

		Ember.$.each(type, function(key, value){
			normData.gitBrowser.push({id: count, 'title': key, 'url': value});
			count++;
		});

		return normData;
	}
});

export default GitBrowser;