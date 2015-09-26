'use strict';
var $ = require ('jquery');
var Backbone = require ('backbone');
var musicianView = require('./views/musicianView.js');
var musicianCollection = require('./collections/musician-collection.js');
var musicianModel= require('./models/musician-model.js');


var musicianUrl = 'https://skills-up.herokuapp.com/musicians';

$(document).ready(function(){
	var $musicianFilter = $('#musicianFilter');
	var $musicianFilterButton=$('#musicianFilterButton');
	var addUser = $('#addUser');
	var $name=$('#name');
	
	var $email=$('#email');
	// var dropdownSelection = ('#instrument');
	

	var newMusician = new musicianCollection();

	addUser.on('submit', function(e){
		e.preventDefault();
		newMusician.create({
			name: $name.val(),
			instrument_id: $instrument.val(),
			contact: $email.val()
		});		
		

	});


	newMusician.on('add', function(newUser){
		// newUser.save();
		var user1= new musicianView({model: newUser});
		// console.log('add workd');
		$('#musiciansP').append(user1.$el);
	})


	$musicianFilterButton.on('click', function(){
		// $('#musiciansP').html('');
		console.log($musicianFilter.val().toString());
		if ($musicianFilter.val().toString()===''){
			$('.entry').show();
		}
		else{
			$('.entry').hide();
			$('.'+$musicianFilter.val().toString()+'').show();
		}
		
	});
	
		



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
			newMusician.fetch();
		},
		findUser: function() {
			$('section').hide();
			$('#homePage').show();
			$('#logIn').toggle('slow');
			
			
		},
		addUserScreen: function(){
			$('section').hide();
			$('#homePage').show();
			$('#newAccount').toggle('slow');
		}


	});


	
	var page = new Router ();
	Backbone.history.start();




});





