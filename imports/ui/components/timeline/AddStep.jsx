import React, {Component} from 'react';
import {render} from 'react-dom';
import FormGroup from "react-bootstrap/lib/FormGroup"
import ControlLabel from "react-bootstrap/lib/ControlLabel"
import FormControl from "react-bootstrap/lib/FormControl"
import Button from "react-bootstrap/lib/Button"


export default class AddStep extends Component {
		constructor(props){
			super(props)
			this.state = {
			}
			this.handleChange = this.handleChange.bind(this);
    		this.handleEndClick = this.handleEndClick.bind(this);
		}


		handleChange(event){
			let state = {}
			console.log(this);
			state[event.target.name]=event.target.value
			this.setState(state)
		}

		handleEndClick(e){
				e.preventDefault();
			// e.stopPropogation();
			// e.nativeEvent.stopImmediatePropogation();
			console.log('Submitted the form, it says '+this.state.stepName +" "+this.state.stepDesc);
			this.props.madeStep();
			console.log(this.props.mile);
			Meteor.call("addStep",{step:this.state, mile:this.props.mile});
		}



		render(){


			return(

				


				<form onSubmit={this.handleEndClick.bind(this)}>
							<FormGroup>
							<ControlLabel>Set a Step: </ControlLabel>
							<FormControl
								type='text'
								ref='stepName'
								name='stepName'
								placeholder='Step Title'
								onChange={this.handleChange.bind(this)}
							/>
							</FormGroup>
							<FormGroup>
							<ControlLabel>Description: </ControlLabel>
							<FormControl
								type='text'
								ref='stepDesc'
								name='stepDesc'
								placeholder='Step Description'
								onChange={this.handleChange.bind(this)}
							/>
							</FormGroup>

						<Button type='submit'> Submit </Button>
						<Button bsStyle='danger' onClick={this.props.cancelStep}> Cancel </Button>



				</form>




				)
		}
	}


	// <div>
					// <label>Title<input type="text" name='stepName' onChange={this.handleChange} /></label>
					// <label>Description<input type="text" name='stepDesc' onChange={this.handleChange} /></label>
					// <button type="" onClick={this.handleEndClick} value=""/>
				// </div>
