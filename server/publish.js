

Meteor.publish('goals', function(){
	return Goals.find()
})

Meteor.publish('milestones', function(){
	return Milestones.find()
})

Meteor.publish('steps', function(){
	return Steps.find()
})