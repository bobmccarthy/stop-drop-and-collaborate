'use strict';

var Backbone = require('backbone');
var _ = require ('backbone/node_modules/underscore');
var musicianModel = require('../models/musician-model.js');


module.exports=Backbone.View.extend({
	tagName: 'section',
	initialize: function(){
		
		console.log('I made it to initialize');


		_.bindAll(
			this,
			'render'
		);
		this.model.on('change', this.render);
		// this.$el.on('click', this.onChangeUser);
		this.render();
	},
	render: function(){
		console.log('renderssssss');
		var userName = this.model.get('name');
		var userInstrument = this.model.get('instrument');
		var userEmail = this.model.get('email');
		this.$el.html('<span>'+userName+'</span><span>'+userInstrument+'</span><span>'+userEmail+'</span>');
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