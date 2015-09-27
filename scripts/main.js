'use strict';
var $ = require ('jquery');
var Backbone = require ('backbone');
var musicianView = require('./views/musicianView.js');
var musicianCollection = require('./collections/musician-collection.js');
var musicianModel= require('./models/musician-model.js');


$(document).ready(function(){

	var addUser = $('#addUser');
	var $name=$('#name');
	
	var $email=$('#email');
	var dropdownSelection = ('#instrument');
            var t = setInterval(function(){
		$("#carousel ul").animate({marginLeft:-480},1000,function(){
			$(this).find("li:last").after($(this).find("li:first"));
			$(this).css({marginLeft:0});
		})
	},5000);




	var newMusician = new musicianCollection();

	addUser.on('submit', function(e){
		e.preventDefault();
		newMusician.create({
			name: $name.val(),
			instrument_id: 1,
			contact: $email.val()
		});		
		console.log(dropdownSelection.val());

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
			$('.carousel').toggle.slow();
			
		},

		goMusicians: function () {
			$('section').hide();
			$('#musiciansPage').show();
			$('.carousel').hide();
		},
		findUser: function() {
			$('section').hide();

			$('#homePage').show();
			$('#logIn').toggle('slow');
			// $('#homePage').css({'z-index': 900});
			
		},
		addUserScreen: function(){
			$('section').hide();
			$('#homePage').show();
			$('#newAccount').toggle('slow');
		}


	});


	
	var page = new Router ();
	Backbone.history.start();




})





