
Meteor.methods({

	addGoal(name){
		console.log('add goal'+ name);
		Goals.insert({
			title: name,
			miles: 0,
			mcomp:0,
			done: false
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
			goal: goal,
			steps:0,
			done: false,
			dstep:0

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
		Milestones.update(mile, {$inc:{steps:-1}})
	},

	setStep({step, mile, done}){
		console.log("-----------------SETSTEP--------------");
		console.log(step);
		console.log(done);
		console.log(mile);
		Steps.update(step,{$set:{
			done: done}})

		if (done === true){
			console.log(this);
			Milestones.update(mile,{$inc:{dstep:1}})
		}else{
			Milestones.update(mile,{$inc:{dstep:-1}})
			}
		

	},

	mileDone({mile, which}){
		console.log("---------------MILEDONE----------------");
		console.log(mile);
		console.log(which);
		Milestones.update(mile._id,{$set:{
			done: which
		}});

		// if (which === true){
		// 	Goals.update(mile.goal,
		// 	{$inc:{mcomp:1}})

		// }else if (which === false){
		// 	Goals.update(mile.goal,
		// 	{$inc:{mcomp:-1}})
		// };

	},

	mDone({goal, status}){
		console.log("------mDONE---------")
		console.log(goal);
		console.log(status);
		// if (status === true){
		// 	Goals.update(goal,
		// 	{$inc:{mcomp:1}})

		// }else if (status === false){
		// 	Goals.update(goal,
		// 	{$inc:{mcomp:-1}})
		// };


	},

	mdoneGoal({goal, which}){
		// if (which === true){
		// 	Goals.update(goal,
		// 	{$inc:{mcomp:1}})

		// }else{
		// 	Goals.update(goal,
		// 	{$inc:{mcomp:-1}})
		// }


	},

	tryit(){

		console.log("~~~~~~TRYIN IT ~~~~~~~~~");
	}

		


	
		








})