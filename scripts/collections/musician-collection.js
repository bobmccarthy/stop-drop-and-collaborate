var Backbone = require('backbone');

var musicianModel = require ('../models/musician-model.js');

module.exports = Backbone.Collection.extend({
	model: musicianModel,
	url: 'http://skills-up.herokuapp.com/musicians'

});