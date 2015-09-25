'use strict';
var $ = require ('jquery');
var Backbone = require ('backbone');
var musicianView = require('./views/musicianView.js');
var musicianCollection = require('./collections/musician-collection.js');
var musicianModel= require('./models/musician-model.js');


$(document).ready(function(){

	var addUser = $('#addUser');
	var $name=$('#name');
	var $instrument=$('#instrument');
	var $email=$('#email');

	var newMusician = new musicianCollection();

	addUser.on('submit', function(e){
		e.preventDefault();
		newMusician.create({
			name: $name.val(),
			instrument: $instrument.val(),
			email: $email.val()
		});		

	});

	newMusician.on('add', function(newUser){
		// newUser.save();
		var user1= new musicianView({model: newUser});
		console.log('add workd');
		$('#musiciansP').append(user1.$el);
	})

	newMusician.fetch();



var Router = Backbone.Router.extend({
	routes: {
		'' : 'goHome',
		'musicians' : 'goMusicians',
		'users': 'makeNewUser'
	},


	goHome: function() {
		$('#musiciansPage').hide();
		$('#homePage').show();
		$('#userProfiles').hide();
	},

	goMusicians: function () {
		$('#homePage').hide();
		$('#musiciansPage').show();
		$('#userProfiles').hide();
	},

	makeNewUser: function() {
		$('#homePage').hide();
		$('#musiciansPage').hide();
		$('#userProfiles').show();
	}


});

var page = new Router ();
Backbone.history.start();




});





