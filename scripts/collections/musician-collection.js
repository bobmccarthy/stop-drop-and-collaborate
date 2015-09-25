var Backbone = require('backbone');

var musicianModel = require ('../models/musician-model.js');

module.exports = Backbone.Collection.extend({
	model: musicianModel,
	url: 'https://skills-up.herokuapp.com/musicians'

});