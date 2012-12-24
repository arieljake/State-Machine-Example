

var Constants = require("./Constants.js");
var Miner = require("./Miner.js");
var MinerWife = require("./MinerWife.js");
var EntityManager = require("./EntityManager.js");
var MessageDispatcher = require("./MessageDispatcher.js");

var miner = new Miner("Ariel");
var minerWife = new MinerWife("Elsa");
var cycles = 0;

EntityManager.registerEntity(Constants.ENTITY_MINER,miner);
EntityManager.registerEntity(Constants.ENTITY_MINERS_WIFE,minerWife);

while (miner.isWealthyEnough() == false && cycles < 200)
{
	miner.update();
	minerWife.update();
	MessageDispatcher.update();

	cycles++;
}

console.log("cycle count: " + cycles);