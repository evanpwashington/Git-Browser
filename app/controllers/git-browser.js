/***** GitBrowser - controller *****/
var GitBrowser = Ember.ObjectController.extend({
	actions: {
		//Update adapter host and send reload to router
		makeRequest	: function(){
			var url = this.get('requestUrl');

			this.store.adapterFor('GitBrowser').set('host', url);
			this.send('updateData');
		},
		copyUrl		:function(item){
			if(item.get('url').indexOf('http') === 0){
				this.set('requestUrl', item.get('url'));
			}
		}
	},
	init: function() {
		var host = this.store.adapterFor('GitBrowser').get('host');

		this.set('requestUrl', host);    
	},
	getRateLimit: function(){
		return this.store.metadataFor('GitBrowser').rateLimitRemaining;
	}.property()
});

export default GitBrowser;