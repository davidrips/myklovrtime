import React, {Component} from 'react';
import {render} from 'react-dom';
import GoalList from './GoalList.jsx'
export default class GoalSet extends Component {
	constructor(){
		super()
	}

	componentDidReceiveProps(){
		console.log("I got props");

		console.log(this.props.allGoals);
	}

	setGoal(event){
		event.preventDefault();
		var goal = this.refs.goalName.value.trim();
		console.log("This is the goal Name "+goal);
		Meteor.call('addGoal', goal, (error,data)=>{
			if(error){console.log(error);}else{console.log(data);}
		});

	}

	goInTime(here){
		console.log("in go times");
		console.log(here);
		let goalRoute = {goal: here}
		Session.set({goal:here})
		FlowRouter.go("/timeline",goalRoute)
		
	}



	render(){
	
		if (this.props.loading == false){

			var res = this.props.allGoals

			return(
				<div className="goalListContainer">
					<div className="goalList">
						<ul>
							{res.map( (goal) => {return <GoalList key={goal._id} theKey={goal._id} className="goal" goTime={this.goInTime.bind(this)} data={goal.title} />})}	
						

						</ul>


					
					</div>
					<div className="goalForm"s>Set a new goal:
						<form onSubmit={this.setGoal.bind(this)}>
						<input type="text" ref='goalName' placeholder='Goal Name'/>
						<button type='submit'> Submit </button>
						</form>


					</div>
						
				</div>
				)




				
		}else{
			return(<div>Just Waiting</div>)
		}

	
								






		
		}




}


GoalSet.propTypes={
	loading: React.PropTypes.bool,
	allGoals: React.PropTypes.array,
}