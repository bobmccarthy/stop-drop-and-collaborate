'use strict';
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults:{
		name: '',
		instrument_id: '',
		contact: ''
	},
	urlRoot: 'http://skills-up.herokuapp.com/musicians',
	idAttribute: 'id'
})