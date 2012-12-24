
var State = require("./State.js");
var Constants = require("./Constants.js");

var MiningForGoldState = module.exports = new State({

	enter: function(miner)
	{
		if (miner.location != Constants.LOC_GOLD_MINE)
		{
			console.log(miner.id + ": Walkin' to the gold mine.");

			miner.location = Constants.LOC_GOLD_MINE;
		}
	},

	execute: function(miner)
	{
		miner.goldInHand += 1;
		miner.fatigueLevel += 1;

		console.log(miner.id + ": Pickin' up a nugget");

		if (miner.isPocketsFull())
		{
			var DepositingGoldInBankState = require("./DepositingGoldInBankState.js");
			miner.changeState(DepositingGoldInBankState);
		}

		if (miner.isThirsty())
		{
			var QuenchingThirstState = require("./QuenchingThirstState.js");
			miner.changeState(QuenchingThirstState);
		}
	},

	exit: function(miner)
	{
		console.log(miner.id + ": Ah'm a leavin' the gold mine with mah pockets full o' sweet gold.");
	}
});