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
			this.set('requestUrl', item.get('url'));
		}
	},
	init: function() {
		var host = this.store.adapterFor('GitBrowser').get('host');
				console.log('meta', this.store.metadataFor('GitBrowser'));
				this.set('requestUrl', host);    
		}
});

export default GitBrowser;

//this.store.adapterFor('application').get('host')