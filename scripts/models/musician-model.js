'use strict';
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults:{
		_id: null,
		name: '',
		instrument: '',
		phoneNumber: null,
		email: ''
	}
})