
var State = require("./State.js");
var Constants = require("./Constants.js");

var DepositingGoldInBankState = module.exports = new State({

	enter: function(miner)
	{
		if (miner.location != Constants.LOC_BANK)
		{
			console.log(miner.id + ": Walkin' to the bank to deposit me gold.");

			miner.location = Constants.LOC_BANK;
		}
	},

	execute: function(miner)
	{
		console.log(miner.id + ": Puttin' me gold in ma bank account.");

		miner.moneyInBank += miner.goldInHand;
		miner.goldInHand = 0;

		if (miner.isWealthyEnough())
		{
			var SleepingAtHomeState = require("./SleepingAtHomeState.js");
			miner.changeState(SleepingAtHomeState);
		}
		else
		{
			var MiningForGoldState = require("./MiningForGoldState.js");
			miner.changeState(MiningForGoldState);
		}
	},

	exit: function(miner)
	{
		console.log(miner.id + ": Ah'm a leavin' the bank with my pockets light as feathers and my account has " + miner.moneyInBank + " gold in it.");
	}

});