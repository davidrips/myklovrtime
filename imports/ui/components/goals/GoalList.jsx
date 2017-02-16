import React, {Component} from 'react';
import {render} from 'react-dom';
import ListGroupItem from "react-bootstrap/lib/ListGroupItem"
import Button from "react-bootstrap/lib/Button"

export default class GoalList extends Component {
			constructor(){
				super();
			}

			dropGoal(e){
				  e.stopPropagation();
				Meteor.call('dropGoal',{_id:this.props.theKey})
			}

			goTime(){
				console.log(`clicked on ${this.props.theKey}`);
				
				this.props.goTime(this.props.theKey)
			}

			render(){
				return(
					<ListGroupItem className="goalNameButtonName" onClick={this.goTime.bind(this)}>
						<span>{this.props.data} </span>
						<span><Button bsStyle="danger" className="goalNameButton" onClick={this.dropGoal.bind(this)}> Delete </Button> </span>
					</ListGroupItem>
					)
			}



}

