
var State = require("./State.js");
var Constants = require("./Constants.js");

var QuenchingThirstState = module.exports = new State({

	enter: function(miner)
	{
		if (miner.location != Constants.LOC_SALOON)
		{
			console.log(miner.id + ": Walkin' to the saloon.");

			miner.location = Constants.LOC_SALOON;
		}
	},

	execute: function(miner)
	{
		miner.thirstLevel = 0;

		console.log(miner.id + ": Wettin' my thirsty whistle.");

		var MiningForGoldState = require("./MiningForGoldState.js");
		miner.changeState(MiningForGoldState);
	},

	exit: function(miner)
	{
		console.log(miner.id + ": Ah'm a leavin' the saloon high on sweet whiskey.");
	}

});