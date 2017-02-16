Milestones = new Mongo.Collection('milestones'); 

var data = Milestones.find().fetch().length;
console.log(data);
console.log(data.length);

if (data<1){
	// Milestones.insert({title: 'blah'})
	"added one"
}else{
	"We have enough"
}


Milestones.after.update(function(userID, doc, fieldNames, modifier, options){
	console.log("-------before HOOK---------");
	var a = this.transform();
	console.log(a);
	console.log(this.previous);


	// var b = a.goal;
	// console.log(b);

	// if (a.done === true){
	// 	Meteor.call("mDone", [b])
	// }



	  modifier.$set = modifier.$set || {}

	if(a.steps === a.dstep && a.steps != 0){
		
		modifier.$set.done = true;
		Meteor.call("mDone", {
			goal: a.goal,
			status:true
		});

	}else{
		modifier.$set.done = false
		Meteor.call("mDone", {
			goal: a.goal,
			status:false
		});
	}	
})

