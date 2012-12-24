


var EntityManager = function()
{
	this.entityMap = {};
};

EntityManager.prototype.registerEntity = function(id,entity)
{
	this.entityMap[id] = entity;
}

EntityManager.prototype.getEntityById = function(id)
{
	return this.entityMap[id];
}

EntityManager.prototype.removeEntity = function(id)
{
	delete this.entityMap[id];
}

EntityManager.instance = null;

EntityManager.getInstance = function()
{
	if (this.instance == null)
	{
		this.instance = new EntityManager();
	}

	return this.instance;
}

module.exports = EntityManager.getInstance();