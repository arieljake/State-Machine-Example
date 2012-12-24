
var BaseGameEntity = require("./BaseGameEntity.js");
var StateMachine = require("./StateMachine.js");
var MinerWifeGlobalState = require("./MinerWifeGlobalState.js");

var MinerWife = module.exports = function(name)
{
	this.stateMachine = new StateMachine(this);
//	this.stateMachine.currentState = SleepingAtHomeState;
	this.stateMachine.globalState = MinerWifeGlobalState;

	this.id = name;
	this._isCooking = false;
}

MinerWife.prototype = Object.create(BaseGameEntity.prototype);

MinerWife.prototype.update = function()
{
	this.stateMachine.update();
}

MinerWife.prototype.handleMessage = function(message)
{
	this.stateMachine.handleMessage(message);
}

MinerWife.prototype.changeState = function(newState)
{
	this.stateMachine.changeState(newState);
}

MinerWife.prototype.isCooking = function(value)
{
	if (value === undefined)
	{
		return this._isCooking;
	}
	else
	{
		this._isCooking = value;
	}
}