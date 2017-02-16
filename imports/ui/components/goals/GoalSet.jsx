import React, {Component} from 'react';
import {render} from 'react-dom';
import GoalList from './GoalList.jsx'
import ListGroup from "react-bootstrap/lib/ListGroup"
import FormGroup from "react-bootstrap/lib/FormGroup"
import ControlLabel from "react-bootstrap/lib/ControlLabel"
import FormControl from "react-bootstrap/lib/FormControl"
import Button from "react-bootstrap/lib/Button"
import Loading from "./Loading.jsx"



export default class GoalSet extends Component {
	constructor(){
		super()
		this.state= {
			value:""
		}
	
	}

	componentDidReceiveProps(){
		console.log("I got props");

		console.log(this.props.allGoals);
	}

	handleChange(e){
		this.setState({value: e.target.value})
	}

	setGoal(event){
		event.preventDefault(event);
		console.log(event);
		console.log(this.refs.goalName);
		var goal = this.state.value.trim();
		console.log("This is the goal Name "+goal);
		Meteor.call('addGoal', goal, (error,data)=>{
			if(error){console.log(error);}else{console.log(data);}
		});
		this.setState({value:""})

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
						<ListGroup>
							{res.map( (goal) => {return <GoalList key={goal._id} theKey={goal._id} className="goal" goTime={this.goInTime.bind(this)} data={goal.title} />})}	
						

						</ListGroup>


					
					</div>
					<div className="goalForm">
						<form onSubmit={this.setGoal.bind(this)}>
							<FormGroup>
							<ControlLabel>Set a New Goal: </ControlLabel>
							<FormControl
								type='text'
								ref='goalName'
								placeholder='Enter Goal'
								value={this.state.value}
								onChange={this.handleChange.bind(this)}
							/>
							</FormGroup>

						<Button type='submit'> Submit </Button>



						</form>


					</div>
						
				</div>
				)




				
		}else{
			return(<Loading />)
		}

	
								






		
		}




}


GoalSet.propTypes={
	loading: React.PropTypes.bool,
	allGoals: React.PropTypes.array,
}