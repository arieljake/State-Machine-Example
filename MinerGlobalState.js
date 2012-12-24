
var State = require("./State.js");
var Constants = require("./Constants.js");

var MinerGlobalState = module.exports = new State({

	enter: function(miner)
	{
		if (miner.location != Constants.LOC_HOME)
		{
			miner.fatigueLevel++;
		}
	},

	execute: function(miner)
	{
		if (miner.isFatigued())
		{
			var SleepingAtHomeState = require("./SleepingAtHomeState.js");
			miner.changeState(SleepingAtHomeState);
		}
	},

	handleMessage: function(miner,message)
	{
		switch (message.type)
		{
			default:
				console.log(miner.id + ": Got me a message but don't know what to do with it.");
		}
	}

});