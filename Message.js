

var Message = module.exports = function(params)
{
	this.senderId = params.senderId;
	this.receiverId = params.receiverId;
	this.type = params.type;
	this.dispatchTime = params.dispatchTime;
	this.data = params.data;
}