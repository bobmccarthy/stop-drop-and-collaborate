var Backbone = require('backbone');

var motionModel = require ('../models/motion-model.js');

module.exports = Backbone.Collection.extend({
	model: motionModel,
	url: 'https://skills-up.herokuapp.com/motioners'

});