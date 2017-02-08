import React, {Component} from 'react';
import {render} from 'react-dom';

	export default class TimelineAddMile extends Component {
		constructor(props){
			super(props)
			this.state = {
			}
			this.handleChange = this.handleChange.bind(this);
    		this.handleEndClick = this.handleEndClick.bind(this);
		}


		handleChange(event){
			let state = {}
			state[event.target.name]=event.target.value
			this.setState(state)
		}

		handleEndClick(e){
		
			// e.stopPropogation();
			// e.nativeEvent.stopImmediatePropogation();
			console.log('Submitted the form, it says '+this.state.mileName +" "+this.state.mileDesc);
			this.props.madeMile();
			Meteor.call("addMilestone",{milestone:this.state, goal:this.props.goal._id});

			
		}



		render(){


			return(

				<div>
					<label>Title<input type="text" name='mileName' onChange={this.handleChange} /></label>
					<label>Description<input type="text" name='mileDesc' onChange={this.handleChange} /></label>
					<button type="" onClick={this.handleEndClick} value=""/>
				</div>




				)
		}
	}
