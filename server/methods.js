
Meteor.methods({

	addGoal(name){
		console.log('add goal'+ name);
		Goals.insert({
			title: name,
			miles: 0
		})
	},

	dropGoal(id){
		console.log(id);
		console.log('delete goal'+ id._id);
		Goals.remove(id._id)
	},

	addMilestone({milestone, goal}){
		console.log(milestone);
		console.log(goal);
		Milestones.insert({
			title: milestone.mileName,
			desc: milestone.mileDesc,
			goal: goal
		});
		Goals.update(goal, {$inc: {miles:1}})
	},

	dropMile({mile, goal}){
		console.log(mile);
		console.log(goal);
		Milestones.remove(mile)
		Goals.update(goal, {$inc:{miles:-1}})
	},


	addStep({step, mile}){
		console.log(step);
		console.log(mile);
		Steps.insert({
			title: step.stepName,
			desc: step.stepDesc,
			mile: mile,
			done: false
		});
		Milestones.update(mile, {$inc: {steps:1}})
	},

	dropStep({step, mile}){
		console.log(step);
		console.log(mile);
		Milestones.remove(step)
		Milestones.update(mile, {$inc:{step:-1}})
	},

	setStep({step, done}){
		console.log(step);
		console.log(done);
		Steps.update(step,{$set:{
			done: done}})

	}








})