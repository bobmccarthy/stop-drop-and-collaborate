'use strict';
var $ = require ('jquery');
var Backbone = require ('backbone');
var Router = Backbone.Router.extend({
	routes: {
		' home' : 'goHome',
		'musicians' : 'goMusicians',
},


	goHome: function( ) {
		$('#musiciansPage').hide( );
		$('#homePage').show( );
	},

	goMusicians: function ( ) {
		$('#homePage').hide( );
		$('#musiciansPage').show( );
	}


	
})

var page = new Router ( );
Backbone.history.start( );
