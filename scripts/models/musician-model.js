'use strict';
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults:{
		name: '',
		password: '',
		contact: '',
		instrument: '',
		description: ''

	},
	urlRoot: 'http://tiyfe.herokuapp.com/collections/SkillsUp',
	idAttribute: '_id'
})