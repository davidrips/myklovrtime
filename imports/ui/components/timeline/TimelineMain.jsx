import React, {Component} from 'react';
import {render} from 'react-dom';
import TimelineAddMile from "./TimelineAddMile.jsx"
import MilestoneListWrapper from "./MilestoneListWrapper.jsx"
import Jumbotron from "react-bootstrap/lib/Jumbotron"
import Button from "react-bootstrap/lib/Button"

export default class TimelineMain extends Component {
	constructor(props){
		super(props)

	
			this.state={showList:true,
						showForm: false}

		


	}

	makeMile(){
		console.log("Make Milestone");
		
		this.setState({
			showForm: true
		})

	}

	cancelMile(){
		this.setState({showForm:false})
	}

	madeMilestone(){
		this.setState({showForm:false, showList:true})

	}


	updateScore(mile, which){
		console.log("IN TIMELINE MAIN");
		console.log(mile);
		console.log(which);
		// Meteor.call("mdoneGoal", {goal, which})
		Meteor.call("mileDone", {mile, which})
		let goal = this.props.thisGoal._id
		
		console.log("CALLED MILEDONE");
	}

	render(){
		if (this.props.loading == false){
			console.log(this.props.thisGoal);






			return(
				<div>

					<Jumbotron>
						<div className="goalName">{this.props.thisGoal.title}</div>
						<div className='addMileContainer'><Button className="addMile" bsStyle="primary" onClick={this.makeMile.bind(this)}>Add Milestone</Button></div>

						{this.state.showForm ? <TimelineAddMile goal={this.props.thisGoal} madeMile={this.madeMilestone.bind(this)} cancelMile={this.cancelMile.bind(this)}/> : null}
					</Jumbotron>
					

					{this.state.showList ? <MilestoneListWrapper goal={this.props.thisGoal} updateScore={this.updateScore.bind(this)} /> : null }
					
					
				</div>
				


				)
		}else{
				return(<div>Just Waiting</div>)

		}

	}
}


	