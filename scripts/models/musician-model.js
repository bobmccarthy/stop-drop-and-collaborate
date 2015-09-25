'use strict';
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults:{
		name: '',
		instrument: '',
		email: ''
	},
	urlRoot: 'http://tiyfe.herokuapp.com/collections/groupProject',
	idAttribute: '_id'
})