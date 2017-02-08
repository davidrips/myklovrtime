
import React, {Component} from 'react';
import {render} from 'react-dom';
import MilestoneWrapper from "./MilestoneWrapper.jsx"


export default class MilestoneMain extends Component {

	constructor(props){
		super(props);


	}


	updateScore(){
		console.log("IN MILESTONE MAIN");
	}



	render(){
			if (this.props.loading == false){
				var res = this.props.milestones

			return(
				
					<div className="mileContainer"> 
					<div className="mileLabel">Milestones:</div>
					{res.map( (mile) => {return <MilestoneWrapper key={mile._id} theKey={mile._id} updateScore={this.props.updateScore}  data={mile} className="mile" goal={Session.get("goal")} />})}	
					</div>	
				)
		}else{
				return(<div>Just Waiting</div>)

		}


	}

}


