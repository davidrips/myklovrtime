import React, {Component} from 'react';
import {render} from 'react-dom';
import TimelineMainWrapper from "./TimelineMainWrapper.jsx"

export default class TimelineView extends Component{

		constructor(){
			super()
			

		}

		componentWillMount(){
			const goal = Session.get("goal")
			console.log(goal);
			this.setState({
				goal: goal
			});
		}
	

		render(){

			return(
				// <div>here we are</div>
				<TimelineMainWrapper goal={this.state.goal} />
			)



		}
		

}