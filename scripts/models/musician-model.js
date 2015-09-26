'use strict';
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults:{
		name: '',
		instrument_id: '',
		contact: ''
	},
	urlRoot: 'https://skills-up.herokuapp.com/',
	idAttribute: 'id'
})