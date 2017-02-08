import React, {Component} from 'react';
import {render} from 'react-dom';


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
			state[event.target.name]=event.target.value
			this.setState(state)
		}

		handleEndClick(e){
		
			// e.stopPropogation();
			// e.nativeEvent.stopImmediatePropogation();
			console.log('Submitted the form, it says '+this.state.stepName +" "+this.state.stepDesc);
			this.props.madeStep();
			console.log(this.props.mile);
			Meteor.call("addStep",{step:this.state, mile:this.props.mile});
		}



		render(){


			return(

				<div>
					<label>Title<input type="text" name='stepName' onChange={this.handleChange} /></label>
					<label>Description<input type="text" name='stepDesc' onChange={this.handleChange} /></label>
					<button type="" onClick={this.handleEndClick} value=""/>
				</div>




				)
		}
	}
