import React, {Component} from 'react';
import {render} from 'react-dom';
import Steps from "./Steps.jsx"


export default class StepsList extends Component{
		constructor(props){
			super(props)
			this.state={
			}
		}


		render(){

			var res = this.props.steps;

			return(

				<div className="stepList">
					
							{res.map( (step) => {return <Steps key={step._id} theKey={step._id} title={step.title} desc={step.desc} done={step.done} />})}	
						

						


					
					</div>


				)
				




		}






}