
var State = require("./State.js");
var Constants = require("./Constants.js");
var MessageDispatcher = require("./MessageDispatcher.js");

var SleepingAtHomeState = module.exports = new State({

	handleMessage: function(miner,message)
	{
		switch (message.type)
		{
			case Constants.MSG_DINNER_READY:
				var EatingDinnerState = require("./EatingDinnerState.js");
				miner.changeState(EatingDinnerState);
				break;
		}
	},

	enter: function(miner)
	{
		if (miner.location != Constants.LOC_HOME)
		{
			console.log(miner.id + ": Walkin' to me home to get sum sleep and sum grub.");

			miner.location = Constants.LOC_HOME;

			MessageDispatcher.dispatchMessage(
				0,
				Constants.ENTITY_MINER,
				Constants.ENTITY_MINERS_WIFE,
				Constants.MSG_MINER_HOME);
		}
	},

	execute: function(miner)
	{
		if (miner.fatigueLevel > 0)
		{
			console.log(miner.id + ": Puttin' me down to rest for a bit.");

			miner.fatigueLevel--;
		}
		else
		{
			var MiningForGoldState = require("./MiningForGoldState.js");
			miner.changeState(MiningForGoldState);
		}
	},

	exit: function(miner)
	{
		console.log(miner.id + ": Ah'm a leavin' ma house rested and ready to do me work.");
	}

});