
var BaseGameEntity = require("./BaseGameEntity.js");
var StateMachine = require("./StateMachine.js");
var MinerInitialState = require("./MinerInitialState.js");
var MinerGlobalState = require("./MinerGlobalState.js");

var Miner = module.exports = function(name)
{
	this.stateMachine = new StateMachine(this);
	this.stateMachine.currentState = MinerInitialState;
	this.stateMachine.globalState = MinerGlobalState;

	this.id = name;
	this.location = undefined;
	this.goldInHand = 0;
	this.moneyInBank = 0;
	this.thirstLevel = 0;
	this.fatigueLevel = 0;
}

Miner.prototype = Object.create(BaseGameEntity.prototype);

Miner.prototype.update = function()
{
	this.thirstLevel++;
	this.stateMachine.update();
}

Miner.prototype.handleMessage = function(message)
{
	this.stateMachine.handleMessage(message);
}

Miner.prototype.changeState = function(newState)
{
	this.stateMachine.changeState(newState);
}

Miner.prototype.revertState = function()
{
	this.stateMachine.revertToPreviousState();
}

Miner.prototype.isPocketsFull = function()
{
	return this.goldInHand >= 3;
}

Miner.prototype.isThirsty = function()
{
	return this.thirstLevel >= 3;
}

Miner.prototype.isFatigued = function()
{
	return this.fatigueLevel >= 5;
}

Miner.prototype.isWealthyEnough = function()
{
	return this.moneyInBank >= 9;
}