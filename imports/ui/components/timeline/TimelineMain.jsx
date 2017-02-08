import React, {Component} from 'react';
import {render} from 'react-dom';
import TimelineAddMile from "./TimelineAddMile.jsx"
import MilestoneListWrapper from "./MilestoneListWrapper.jsx"

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

	madeMilestone(){
		this.setState({showForm:false, showList:true})

	}


	updateScore(){
		console.log("IN MILESTONE MAIN");
	}

	render(){
		if (this.props.loading == false){
			console.log(this.props.thisGoal);
			return(
				<div>
					<div className="goalName">{this.props.thisGoal.title}</div>
					{this.state.showList ? <MilestoneListWrapper goal={this.props.thisGoal} updateScore={this.updateScore.bind(this)} /> : null }
					<div className="addMileContainer">
						<button className="addMile" onClick={this.makeMile.bind(this)}>Add Milestone</button>
					</div>
					{this.state.showForm ? <TimelineAddMile goal={this.props.thisGoal} madeMile={this.madeMilestone.bind(this)} /> : null}
				</div>
				


				)
		}else{
				return(<div>Just Waiting</div>)

		}

	}
}


	