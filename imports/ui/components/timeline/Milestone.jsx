import React, {Component} from 'react';
import {render} from 'react-dom';
import AddStep from "./AddStep.jsx"
import StepsList from "./StepsList.jsx"
import ListGroupItem from "react-bootstrap/lib/ListGroupItem"
import Button from "react-bootstrap/lib/Button"

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
			console.log("component will mount and the props are here?");
			console.log(this.props);

		}

		componentDidMount(){
			
		
			
		}

		cancelStep(){
		this.setState({addStep:false})
	}



		handleDelete(e){
		
			console.log(this.props.theKey)
			console.log('handling delete');
			var mile = this.props.theKey
			Meteor.call("dropMile", {mile:mile, goal:this.props.goal})
		}

		updateGoals(d, t){
				if (d===t && d>0){
					this.props.updateScore(this.props.data, true);
					console.log("updating score...");
				}else if(d !== t){
					console.log('updating negative score');
					this.props.updateScore(this.props.data, false)
				}	
		}

		addStep(e){
			this.setState({
				addStep: true
			})
			e.stopPropogation()
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


						// this.updateGoals(d, t)
					
				}


				

			}

			
			



			return(


				<ListGroupItem onClick={this.showSteps.bind(this)} className={"mileCont"}>
					

					<div data-id={this.props.theKey} className={(d==t && d > 0) ? "mileDiv mileDone": "mileDiv"}>
						<div>
								<span className="mileButtonContainer">
									
									<span className="mileTitle">Title: {this.props.data.title}</span>
									<span className="mileDesc">Description:{this.props.data.desc}</span>
									<span className='mileCount'>{
										(t) ? <div>{d} / {t} done </div> : null
									}</span>
								</span>
								<span className='mileButtonContainer'>
									<Button bsStyle="default" onClick={this.addStep.bind(this)}>Add Step</Button>
									<Button bsStyle="default" onClick={this.handleEdit.bind(this)}>Edit</Button>
									<Button bsStyle="danger" onClick={this.handleDelete.bind(this)}>Remove</Button>
								</span>	
						</div>
						
						{(this.state.addStep === true) ? <AddStep madeStep={this.madeStep.bind(this)} cancelStep={this.cancelStep.bind(this)}mile={this.props.theKey} /> : null}

					</div>

					{(this.state.showSteps === true) ? <StepsList steps={this.props.steps} updateGoal={this.updateGoals.bind(this)} d={d} t={t} /> : null}
				</ListGroupItem>
				

				)










		}
}

