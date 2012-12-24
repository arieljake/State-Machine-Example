
var State = require("./State.js");
var Constants = require("./Constants.js");
var CookingStewState = require("./CookingStewState.js");

var MinerWifeGlobalState = module.exports = new State({

	handleMessage: function(wife,message)
	{
		switch (message.type)
		{
			case Constants.MSG_MINER_HOME:
				console.log(wife.id + ": Ma husband is home. Got to make im sum stew.");
				wife.changeState(CookingStewState);
				break;

			default:
				console.log(miner.id + ": Got me a message but don't know what to do with it.");
		}
	}

});