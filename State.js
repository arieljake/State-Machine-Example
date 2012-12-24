

var State = module.exports = function(options)
{
	this.options = options || {};
};

State.prototype.enter = function(target)
{
	if (this.options.enter)
	{
		this.options.enter.call(this,target);
	}
};

State.prototype.execute = function(target)
{
	if (this.options.execute)
	{
		this.options.execute.call(this,target);
	}
};

State.prototype.exit = function(target)
{
	if (this.options.exit)
	{
		this.options.exit.call(this,target);
	}
}

State.prototype.handleMessage = function(target,message)
{
	if (this.options.handleMessage)
	{
		this.options.handleMessage.call(this,target,message);
		return true;
	}
	else
	{
		return false;
	}
}