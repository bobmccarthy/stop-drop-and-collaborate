'use strict';
var $ = require ('jquery');
var Backbone = require ('backbone');
var musicianView = require('./views/musicianView.js');
var musicianCollection = require('./collections/musician-collection.js');
var musicianModel= require('./models/musician-model.js');
var motionView = require('./views/motionView.js');
var motionCollection = require('./collections/motion-collection.js');
var motionModel= require('./models/motion-model.js');


var musicianUrl = 'https://skills-up.herokuapp.com/musicians';
var motionUrl = 'https://skills-up.herokuapp.com/motioners';

$(document).ready(function(){
	var $musicianFilter = $('#musicianFilter');
	var $musicianFilterButton=$('#musicianFilterButton');
	var $motionFilter = $('#motionFilter');
	var $motionFilterButton=$('#motionFilterButton');
	var addUser = $('#addUser');
	var $name=$('#name');
	
	var $email=$('#email');

	var dropdownSelection = ('#instrument');
	var carousel = (function () {
        var counter = 0,
            i,
            j,
            slides =  $("#carousel .slide"),
            slidesLen = slides.length - 1;
        for (i = 0, j = 9999; i &lt; slides.length; i += 1, j -= 1) {
            $(slides[i]).css("z-index", j);
        }
        return {
            startSlideshow: function () {
                window.setInterval(function () {
                    if (counter === 0) {
                        slides.eq(counter).fadeOut();
                        counter += 1;
                    } else if (counter === slidesLen) {
                        counter = 0;
                        slides.eq(counter).fadeIn(function () {
                            slides.fadeIn();
                        });
                    } else {
                        slides.eq(counter).fadeOut();
                        counter += 1;
                    }
                }, 5000);
            }
        };
    }());
    slideshow.startSlideshow();

}());
           
		



	// var dropdownSelection = ('#instrument');
	

	var newMusician = new musicianCollection();
	var newMotion = new motionCollection();

	addUser.on('submit', function(e){
		e.preventDefault();
		newMusician.create({
			name: $name.val(),
			instrument: $instrument.val(),
			contact: $email.val()
		});		
		

	});


	newMusician.on('add', function(newUser){
		// newUser.save();
		var user1= new musicianView({model: newUser});
		// console.log('add workd');
		$('#musiciansP').append(user1.$el);
	});
	newMotion.on('add', function(newUser){
		// newUser.save();
		var user1= new motionView({model: newUser});
		// console.log('add workd');
		$('#motionsP').append(user1.$el);
	});


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
	$motionFilterButton.on('click', function(){
		// $('#musiciansP').html('');
		console.log($motionFilter.val().toString());
		if ($motionFilter.val().toString()===''){
			$('.entry').show();
		}
		else{
			$('.entry').hide();
			$('.'+$motionFilter.val().toString()+'').show();
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
			$('.carousel').toggle.slow();
			
		},

		goMusicians: function () {
			$('section').hide();
			$('#musiciansPage').show();
			$('#carousel').hide();

			newMusician.fetch();
			newMotion.fetch();

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




})





