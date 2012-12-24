
var State = require("./State.js");
var Constants = require("./Constants.js");
var MessageDispatcher = require("./MessageDispatcher.js");

var CookingStewState = module.exports = new State({

	handleMessage: function(wife,message)
	{
		switch (message.type)
		{
			case Constants.MSG_DINNER_READY:
				console.log(wife.id + ": Stew's ready! Let's eat.");

				MessageDispatcher.dispatchMessage(
					0,
					Constants.ENTITY_MINERS_WIFE,
					Constants.ENTITY_MINER,
					Constants.MSG_DINNER_READY);

				wife.isCooking(false);

				var DoingHouseworkState = require("./DoingHouseworkState.js");
				wife.changeState(DoingHouseworkState);
				break;
		}
	},

	enter: function(wife)
	{
		if (!wife.isCooking())
		{
			console.log(wife.id + ": Puttin' the stew on the stove.");

			MessageDispatcher.dispatchMessage(
				1.5,
				Constants.ENTITY_MINERS_WIFE,
				Constants.ENTITY_MINERS_WIFE,
				Constants.MSG_DINNER_READY);

			wife.isCooking(true);
		}
	},

	execute: function(wife)
	{

	},

	exit: function(wife)
	{
		
	}
});