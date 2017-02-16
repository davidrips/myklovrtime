
import React, {Component} from 'react';
import {render} from 'react-dom';
import MilestoneWrapper from "./MilestoneWrapper.jsx"
import ListGroup from "react-bootstrap/lib/ListGroup"


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
				
					<ListGroup className="mileContainer"> 
					
					{res.map( (mile) => {return <MilestoneWrapper key={mile._id} theKey={mile._id} updateScore={this.props.updateScore}  data={mile} className="mile" goal={Session.get("goal")} />})}	
					</ListGroup>	
				)
		}else{
				return(<div>Just Waiting</div>)

		}


	}

}


