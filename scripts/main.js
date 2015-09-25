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
	// var $cancelButton= $('.cancelButton')


	var newMusician = new musicianCollection();

	addUser.on('submit', function(e){
		e.preventDefault();
		newMusician.create({
			name: $name.val(),
			instrument_id: 1,
			contact: $email.val()
		});		

	});

	newMusician.on('add', function(newUser){
		// newUser.save();
		var user1= new musicianView({model: newUser});
		// console.log('add workd');
		$('#musiciansP').append(user1.$el);
	})

	newMusician.fetch();



	var Router = Backbone.Router.extend({
		routes: {
			'' : 'goHome',
			'account': 'findUser',
			'musicians' : 'goMusicians',
			'addUser': 'addUserScreen'
		},


		goHome: function() {
			$('section').hide();
			$('#homePage').show();
			
		},

		goMusicians: function () {
			$('section').hide();
			$('#musiciansPage').show();
		},
		findUser: function() {
			$('section').hide();
			$('#homePage').show();
			$('#logIn').show();
		},
		addUserScreen: function(){
			$('section').hide();
			$('#homePage').show();
			$('#newAccount').show();
		}


	});


	
	var page = new Router ();
	Backbone.history.start();




});





