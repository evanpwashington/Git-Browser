/***** GitBrowser - router *****/
import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.findAll('gitBrowser');
	},

	actions: {
		//reload router
		updateData: function(){
			this.store.unloadAll('GitBrowser');
			this.refresh();
		}
	}
});
