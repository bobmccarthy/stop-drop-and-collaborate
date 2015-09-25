'use strict';
var $ = require ('jquery');
var Backbone = require ('backbone');

var musicianCollection = require('./collections/musician-collection.js');
var musicianModel= require('./models/musician-model.js');

var newMusician = new musicianCollection();
newMusician.add({
	name: 'Bob',
	instrument: 'guitar',
	email: 'bob@gmail.com'
});
var newMusicia = new musicianCollection();
newMusicia.add({
	name: 'Jim',
	instrument: 'guitar',
	email: 'jim@gmail.com'
});
console.log(newMusician);
console.log(newMusicia);


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










