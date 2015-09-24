'use strict';


// page.navigate('home')


var Backbone = require ('backbone');
var $ = require ('jquery');



var Router = Backbone.Router.extend({
	routes: {
		'' : 'goHome',
		'musicians' : 'goMusicians'
	},


	goHome: function() {
		$('section').hide();
		$('#homePage').show();
	},

	goMusicians: function () {
		$('section').hide();
		$('#musiciansPage').show();
	}

});

var page = new Router ();
Backbone.history.start();










