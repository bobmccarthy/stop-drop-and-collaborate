'use strict';
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults:{
		name: '',
		instrument: '',
		contact: ''
	},
	urlRoot: 'https://skills-up.herokuapp.com/musicians',
	idAttribute: 'id'
})