
var State = require("./State.js");
var Constants = require("./Constants.js");

var EatingDinnerState = module.exports = new State({

	enter: function(miner)
	{
		console.log(miner.id + ": Okay hun, ahm a-comin to eat!");
	},

	execute: function(miner)
	{
		console.log(miner.id + ": Havin' me a lil' bit of my honey's famous stew.");

		miner.revertState();
	},

	exit: function(miner)
	{
		console.log(miner.id + ": Thank ya li'l lady. Ah better get back to whatever ah wuz doin bifor.");
	}

});