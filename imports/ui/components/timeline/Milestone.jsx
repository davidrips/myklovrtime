import React, {Component} from 'react';
import {render} from 'react-dom';
import AddStep from "./AddStep.jsx"
import StepsList from "./StepsList.jsx"

export default class Milestone extends Component{
		constructor(props){
			super(props)
			console.log(this.props);
			console.log(this.props.steps);
		

			this.state={
				addStep: false,
				showSteps: false
			}
		}

		handleEdit(){


		}

		componentWillMount(){
			


		}



		handleDelete(){
			console.log(this.props.theKey)
			var mile = this.props.theKey
			Meteor.call("dropMile", {mile:mile, goal:this.props.goal})
		}

		addStep(){
			this.setState({
				addStep: true
			})
		}

		madeStep(){
			this.setState({
				showSteps: true,
				addStep: false
			})

		}

		showSteps(){
			console.log("show steps");
			console.log(this.props.steps);
			var a = this.state.showSteps
			var b;
			if (a == false){
				b = true
			}else{
				b = false
			}
			this.setState({
				showSteps: b
			})
		}


		render(){

			var d;
			var t;

			if (this.state.showSteps === true){
				var res = this.props.steps
			}
			if(this.props.loading === false){
				var s = this.props.steps
				if (s.length > 0){
					console.log(s);
					var numOfDone = 0;
					for(var i=0;i<s.length;i++){
					    if(s[i].done === true)
					       numOfDone++;
					}
					console.log("numofDone");
					console.log(numOfDone);

					d = numOfDone;
					t = s.length
				}
				if (d===t){
					this.props.updateScore();
					console.log("updating score...");
				}	

			}




			return(
				<div className={"mileCont"}>
					<div data-id={this.props.theKey} className={(d==t) ? "mileDiv mileDone": "mileDiv"}>
						<div>
						<span onClick={this.showSteps.bind(this)}>
							
							<span className="mileTitle">Title: {this.props.data.title}</span>
							<span className="mileDesc">Description:{this.props.data.desc}</span>
						</span>
						<span className='mileButtonContainer'>
							<button onClick={this.addStep.bind(this)}>Add Step</button>
							<button onClick={this.handleEdit.bind(this)}>Edit</button>
							<button onClick={this.handleDelete.bind(this)}>Remove</button>
						</span>	
						<span>
							{
								(t) ? <div>{d} / {t} done </div> : null



							}

						</span>
						</div>
						{(this.state.addStep === true) ? <AddStep madeStep={this.madeStep.bind(this)} mile={this.props.theKey} /> : null}

					</div>
					{(this.state.showSteps === true) ? <StepsList steps={this.props.steps} /> : null}
				</div>
				

				)










		}
}

