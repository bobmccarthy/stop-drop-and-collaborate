'use strict';
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults:{
		name: '',
		instrument_id: '',
		contact: ''
	},
	urlRoot: 'https://tiyfe.herokuapp.com/collections/testers',
	idAttribute: 'id'
})