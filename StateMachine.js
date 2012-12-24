

var StateMachine = module.exports = function(owner)
{
	this.owner = owner;
	this.currentState = undefined;
	this.previousState = undefined;
	this.globalState = undefined;
}

StateMachine.prototype.update = function()
{
	if (this.globalState)
	{
		this.globalState.execute(this.owner);
	}

	if (this.currentState)
	{
		this.currentState.execute(this.owner);
	}
}

StateMachine.prototype.handleMessage = function(message)
{
	if (this.currentState && this.currentState.handleMessage(this.owner,message))
	{
		return true;
	}

	if (this.globalState && this.globalState.handleMessage(this.owner,message))
	{
		return true;
	}

	return false;
}

StateMachine.prototype.changeState = function(newState)
{
	this.previousState = this.currentState;

	if (this.currentState)
	{
		this.currentState.exit(this.owner);
	}

	this.currentState = newState;

	if (this.currentState)
	{
		this.currentState.enter(this.owner);
	}
}

StateMachine.prototype.revertToPreviousState = function()
{
	if (this.previousState)
	{
		this.changeState(this.previousState);
		this.previousState = undefined;
	}
}