import React, {Component} from 'react';
import {render} from 'react-dom';

export default class GoalList extends Component {
			constructor(){
				super();
			}

			dropGoal(){
				Meteor.call('dropGoal',{_id:this.props.theKey})
			}

			goTime(){
				console.log(`clicked on ${this.props.theKey}`);
				
				this.props.goTime(this.props.theKey)
			}

			render(){
				return(
					<div><li onClick={this.goTime.bind(this)}>{this.props.data} </li><button onClick={this.dropGoal.bind(this)}> Delete </button></div>
					)
			}



}

// GoalList.propTypes={
// 	data:React.PropType.string
// }