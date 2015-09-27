'use strict';
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults:{
		name: '',
		instrument_id: '',
		contact: ''
	},
<<<<<<< HEAD
	urlRoot: 'https://tiyfe.herokuapp.com/collections/testers',
=======
	urlRoot: 'http://tiyfe.herokuapp.com/collections/testers',
>>>>>>> 20f4575cb717c1060e15fe84a62e86c3ee2a7177
	idAttribute: 'id'
})