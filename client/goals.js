

Meteor.subscribe("goals", function(){
	console.log(Goals.find().fetch());
})