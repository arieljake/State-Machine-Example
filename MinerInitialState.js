
var State = require("./State.js");
var Constants = require("./Constants.js");

var MinerInitialState = module.exports = new State({

	execute: function(miner)
	{
		var SleepingAtHomeState = require("./SleepingAtHomeState.js");
		miner.changeState(SleepingAtHomeState);
	}

});