'use strict';
var $ = require ('jquery');
var Backbone = require ('backbone');
var musicianView = require('./views/musicianView.js');
var musicianCollection = require('./collections/musician-collection.js');
var musicianModel= require('./models/musician-model.js');
var motionView = require('./views/motionView.js');
var motionCollection = require('./collections/motion-collection.js');
var motionModel= require('./models/motion-model.js');
	

var newMusician = new musicianCollection();
// var newMotion = new motionCollection();


var musicianUrl = 'https://skills-up.herokuapp.com/musicians';
// var motionUrl = 'https://skills-up.herokuapp.com/motioners';

$(document).ready(function(){
	var $musicianFilter = $('#musicianFilter');
	var $musicianFilterButton=$('#musicianFilterButton');
	// var $motionFilter = $('#motionFilter');
	// var $motionFilterButton=$('#motionFilterButton');
	var addUser = $('#addUser');
	var $name=$('#name');
	newMusician.on('add', function(newUser){
		// newUser.save();
		var user1= new musicianView({model: newUser});
		// console.log('add workd');
		$('#musiciansP').prepend(user1.$el);
	});

	
	var $email=$('#email');
	$('#newAccount').hide();
	$('#logIn').hide();

	var Router = Backbone.Router.extend({
		routes: {
			'' : 'goHome',
			'account': 'findUser',
			'collaborators': 'goMusic',//THIS IS MAKING THE INTER SCREEN NOT COME UP
			'addUser': 'addUserScreen',
			'musicians': 'goMusic',
			'motioners': 'goMotion'
		},


		goHome: function() {
			$('section').hide();
			$('#homePage').show();
			$('.carousel').toggle('slow');
			$('.logUserName').val('');
			$('.logPassword').val('');
			$('.error').text('');
		},

		goColab: function () {
			$('section').hide();
			$('#collaborators').show();

		},
		goMusic: function(){
			$('section').hide();
			$('#musiciansPage').show();
			$('.showMusicians').show();
			newMusician.fetch();
	
		},
		goMotion: function(){
			$('section').hide();
			$('#motionersPage').show();
			// newMotion.fetch();
			
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
			window.scrollTo(0,0);
		}


	});

	var page = new Router ();
	Backbone.history.start();

	$('#carousel2').hide();
    var t = setInterval(function(){
		$('#carousel1').toggle('left');
		$('#carousel2').toggle('right');
	},5000);


    $('#logInForm').on('submit', function(e){
    	e.preventDefault();
    	
    	$.get(
		'http://tiyfe.herokuapp.com/collections/SkillsUp',
		function(response) {

			for (var j=0; j<response.length; j++){
				
				if ($('.logUserName').val()===''||$('.logPassword')===''){
					$('.error').text('Please Fill Both Fields');
					$('.logUserName').val('');
					$('.logPassword').val('');
				}
				else if ($('.logUserName').val()===response[j].name && $('.logPassword').val()===response[j].password){
					$('#logIn').hide();
					$('.logUserName').val('');
					$('.logPassword').val('');
					$('.error').text('');
					
					
				}
				else{

					$('.logPassword').val('');
					$('.error').text('Name and/or Password does not match');
				}
			}
			
		},
		'json'
		);
		window.location = '#musicians';
    })

	// var dropdownSelection = ('#instrument');

	addUser.on('submit', function(e){
		e.preventDefault();
		var image = $('#userAvatar').val() || '../images/default_usr_icon_sm.png';
		console.log(image);
		if ($name.val()===''||$('#newPassword').val()===''||$email.val()===''||$('#aboutYou').val()===''){
			$('.createError').text('Please fill out all fields')
		}
		else{
			$.post(
			'http://tiyfe.herokuapp.com/collections/SkillsUp',
			{
				name: $name.val(),
				password: $('#newPassword').val(),
				instrument: $('#instrument').val(),
				contact: $email.val(),
				description: $('#aboutYou').val(),
				img: image

			}
			).done(function(data){
				$name.val('');
				$email.val('');
				$('section').hide();
				$('#musiciansPage').show();
				console.log('success!');
				window.location = '#musicians';
			});
		}
		

	});

	// newMotion.on('add', function(newUser){
	// 	// newUser.save();
	// 	var user1= new motionView({model: newUser});
	// 	// console.log('add workd');
	// 	$('#motionsP').append(user1.$el);
	// });

	$musicianFilterButton.on('click', function(){
		// $('#musiciansP').html('');
		
		if ($musicianFilter.val().toString()===''){
			$('.entry').show();
		}
		else{
			$('.entry').hide();
			$('.'+$musicianFilter.val().toString()+'').show();
		}
		
	});
	// $motionFilterButton.on('click', function(){
	// 	// $('#musiciansP').html('');
	// 	console.log($motionFilter.val().toString());
	// 	if ($motionFilter.val().toString()===''){
	// 		$('.entry').show();
	// 	}
	// 	else{
	// 		$('.entry').hide();
	// 		$('.'+$motionFilter.val().toString()+'').show();
	// 	}
		
	// });
})







