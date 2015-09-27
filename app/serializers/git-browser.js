/***** GitBrowser - serializer *****/
import DS from 'ember-data';

var GitBrowser = DS.RESTSerializer.extend({
	//necessary to convert data from api to ember-friendly object
	normalizePayload: function(payload) {
		var count 		= 0,
			normData 	= {"gitBrowser": []};

		if(!payload.lenth){
			normData.gitBrowser.push({
					'id': 1, 
					'title': '', 
					'url': 'Nothing to see here, folks.', 
					'isSubObject': false
			});
		}
		
		Ember.$.each(payload, function(key, value){
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