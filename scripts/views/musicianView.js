'use strict';
var $ = require('jquery');
var Backbone = require('backbone');
var _ = require ('backbone/node_modules/underscore');
var musicianModel = require('../models/musician-model.js');




module.exports=Backbone.View.extend({
	tagName: 'section',
	initialize: function(){
		


		_.bindAll(
			this,
			'render',
			'expander'
			
			
		);

		this.render();
		this.model.on('change', this.render);
		this.$('#expand').on('click', this.expander);

	},
	render: function(){

		var userName = this.model.get('name');
		var userInstrument = this.model.get('instrument');
		var userEmail = this.model.get('contact');
		console.log(this.model.get('name'));
		
		
		this.$el.html('<div class="'+userInstrument+' entry"><button id="expand">+</button><img class="userImage" src="../images/default_usr_icon_sm.png"><h4>'+userName+'</h4><p class="userInstrument">'+userInstrument+'</p><div id="desc"><p>'+userEmail+'</p><p>I am a rockstar musician. I have been in plenty of bands and stuff. What else... Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah</p></div></div>');
		this.$('#desc').hide();
		
		
		
	},
	expander: function(){
		console.log('clicked');
		this.$('#desc').toggle('down');	
	},
	

});