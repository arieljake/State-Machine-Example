
var State = require("./State.js");
var Constants = require("./Constants.js");

var DoingHouseworkState = module.exports = new State({

	enter: function(wife)
	{
		console.log(wife.id + ": Grabbing me broom and mop.");
	},

	execute: function(wife)
	{
		console.log(wife.id + ": Cleaning the house.");
	},

	exit: function(wife)
	{
		console.log(wife.id + ": Putting me broom and mop away.");
	}
});