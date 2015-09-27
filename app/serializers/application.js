/***** GitBrowser - serializer *****/
import DS from 'ember-data';

var GitBrowser = DS.RESTSerializer.extend({
	//necessary to convert data from api to ember-friendly object
	normalizePayload: function(type, payload) {
		var count 		= 0,
			normData 	= {"gitBrowser": []};

		Ember.$.each(type, function(key, value){
			if(value === null){
				value = "N/A";
			}
			
			var urlIsObject = typeof value === 'object' ? true : false;
				
			normData.gitBrowser.push({
					'id': count, 
					'title': key, 
					'url': urlIsObject ? '' : value, 
					'isSubObject': false
			});
			count++;
			
			if(urlIsObject){
				Ember.$.each(value, function(subKey, subValue){
					subValue = (typeof subValue !== 'object') ? subValue : 'Item is a sub-object';

					normData.gitBrowser.push({
						'id': count, 
						'title': subKey, 
						'url': subValue, 
						'isSubObject': true
					});
					count++;
				});
			}
		});

		return normData;
	}
});

export default GitBrowser;