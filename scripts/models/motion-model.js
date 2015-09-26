'use strict';
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults:{
		name: '',
		concentration: '',
		contact: ''
	},
	urlRoot: 'https://skills-up.herokuapp.com/motioners',
	idAttribute: 'id'
})