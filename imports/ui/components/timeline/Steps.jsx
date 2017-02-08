import React, {Component} from 'react';
import {render} from 'react-dom';


export default class StepsList extends Component{
		constructor(props){
			super(props)


			this.state={
				done: this.props.done
			}
		}
		


		handleChange(event){
			console.log('handling change');
			console.log(event.target.checked)
			Meteor.call("setStep", {step:this.props.theKey, done:event.target.checked})
			this.setState({
				done: event.target.checked
			})
		}



		render(){

			return(
				
				

				<div className={this.state.done ? "stepTrue step" : "stepFalse step"} >
					<span><input onChange={this.handleChange.bind(this)} type="checkbox" checked={this.state.done}/></span>
					<span>{this.props.title}</span>
					<span>{this.props.desc}</span>
					
				</div>



				)
		}



}