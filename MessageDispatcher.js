
var BaseGameEntity = require("./BaseGameEntity.js");
var EntityManager = require("./EntityManager.js");
var Message = require("./Message.js");
var PriorityQueue = require("./PriorityQueue.js");

var dateUtils = require("date-utils");

var MessageDispatcher = function()
{
	this.priorityQueue = new PriorityQueue(this.prioritySort);
}

MessageDispatcher.prototype = Object.create(BaseGameEntity);

MessageDispatcher.prototype.prioritySort = function(a,b)
{
	return a.dispatchTime.getTime() - g.dispatchTime.getTime();
}

MessageDispatcher.prototype.dispatchMessage = function(delay,senderId,receiverId,type,data)
{
	delay = parseInt(delay,10) || 0;

	var message = new Message({
		senderId: senderId,
		receiverId: receiverId,
		type: type,
		data: data,
		dispatchTime: (new Date()).addMilliseconds(delay)
	});

	if (delay <= 0)
	{
		var receiver = EntityManager.getEntityById(receiverId);
		this.deliverMessage(receiver,message);
	}
	else
	{
		this.priorityQueue.push(message);
	}
}

MessageDispatcher.prototype.update = function()
{
	this.dispatchDelayedMessages();
}

MessageDispatcher.prototype.dispatchDelayedMessages = function()
{
	var nowTime = (new Date()).getTime();

	while (this.priorityQueue.length && this.priorityQueue.top().dispatchTime.getTime() <= nowTime)
	{
		var message = this.priorityQueue.pop();
		var receiver = EntityManager.getEntityById(message.receiverId);

		this.deliverMessage(receiver,message);
	}
}

MessageDispatcher.prototype.deliverMessage = function(receiver,message)
{
	if (receiver)
	{
		receiver.handleMessage(message);
	}
	else
	{
		console.log("No receiver for this message: " + message.type);
	}
}

// Singleton

MessageDispatcher.instance = null;

MessageDispatcher.getInstance = function()
{
	if (this.instance == null)
	{
		this.instance = new MessageDispatcher();
	}

	return this.instance;
}

module.exports = MessageDispatcher.getInstance();