/***** GitBrowser - Model *****/
import DS from 'ember-data';

var GitBrowser = DS.Model.extend({
	title			: DS.attr('string'),
	url				: DS.attr('string'),
	
	//replace spaces with underscore and initial caps for title
	formattedTitle	: function(){
		var parts 		= this.get('title').split('_'),
			newTitle 	= '';
			
		Ember.$.each(parts, function(index, item){
			var word = item.charAt(0).toUpperCase() + item.slice(1);
			
			newTitle += (index !== parts.length) ? word + ' ' : word;
		});
		
		return newTitle;
	}.property('title'),
	
	//add random color to url querystring param
	formattedUrl	: function(){
		var url 	= this.get('url'),
			newUrl 	= url,
			params 	= url.match(/{(.*?)}/g);

		if(params){
			Ember.$.each(params, function(index, item){
				var color = "#" + Math.random().toString(16).slice(2, 8);
				
				newUrl = newUrl.replace(item, '<span style="color: ' + color + '">' + item + '</span>');
			});
		}
		
		return newUrl;
	}.property('url')
});

export default GitBrowser;