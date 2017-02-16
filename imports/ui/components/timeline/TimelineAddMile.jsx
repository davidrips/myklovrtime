import React, {Component} from 'react';
import {render} from 'react-dom';
import FormGroup from "react-bootstrap/lib/FormGroup"
import ControlLabel from "react-bootstrap/lib/ControlLabel"
import FormControl from "react-bootstrap/lib/FormControl"
import Button from "react-bootstrap/lib/Button"

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
			e.preventDefault();
			// e.stopPropogation();
			// e.nativeEvent.stopImmediatePropogation();
			console.log('Submitted the form, it says '+this.state.mileName +" "+this.state.mileDesc);
			this.props.madeMile();
			Meteor.call("addMilestone",{milestone:this.state, goal:this.props.goal._id});
		}



		render(){


			return(

				


				<form onSubmit={this.handleEndClick.bind(this)}>
							<FormGroup>
							<ControlLabel>Set a Milestone: </ControlLabel>
							<FormControl
								type='text'
								ref='MileName'
								name='mileName'
								placeholder='Milestone Title'
								onChange={this.handleChange.bind(this)}
							/>
							</FormGroup>
							<FormGroup>
							<ControlLabel>Description: </ControlLabel>
							<FormControl
								type='text'
								ref='mileDesc'
								name='mileDesk'
								placeholder='Milestone Description'
								onChange={this.handleChange.bind(this)}
							/>
							</FormGroup>

						<Button type='submit'> Submit </Button>
						<Button bsStyle='danger' onClick={this.props.cancelMile}> Cancel </Button>



				</form>




				)
		}
	}
