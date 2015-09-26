'use strict';
var $ = require('jquery');
var Backbone = require('backbone');
var _ = require ('backbone/node_modules/underscore');
var musicianModel = require('../models/musician-model.js');




module.exports=Backbone.View.extend({
	tagName: 'section',
	initialize: function(){
		
		// console.log('I made it to initialize');


		_.bindAll(
			this,
			'render',
			'expander'
			
		);
		this.render();
		this.model.on('change', this.render);
		this.$('#expand').on('click', this.expander)
	},
	render: function(){
		var userName = this.model.get('name');
		var userInstrument = this.model.get('instrument');
		var userEmail = this.model.get('contact');
		
		
		this.$el.html('<div class="entry"><button id="expand">+</button><img class="userImage" src="../images/default_usr_icon_sm.png"><div><span>'+userName+'</span></div><div><span>'+userInstrument+'</span></div><div><span>'+userEmail+'</span></div><div id="desc">I am a rockstar musician. I have been in plenty of bands and stuff. What else... Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah</div></div>');
		this.$('#desc').hide();
		
		
		
	},
	expander: function(){
		console.log('clicked');
		this.$('#desc').toggle('down');	
	}
	
	




	
	// onChangeUser: function(){
	// 	if (this.model.get('complete') !== false){
	// 		this.$el.css('text-decoration', 'line-through');
	// 		this.model.set({complete: true});
	// 	}
	// 	else{
	// 		this.$el.css('text-decoration', 'none');
	// 		this.model.set({complete: false});
	// 	}
		
		
	// },
	// timeStamp: function(){

	// 	var since=moment(date).fromNow()

	// }
});