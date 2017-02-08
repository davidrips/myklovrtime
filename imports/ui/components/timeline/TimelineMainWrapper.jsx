import React, {Component} from 'react';
import {render} from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import TimelineMain from "./TimelineMain.jsx"
// import GoalSet from './GoalSet.jsx'

export default createContainer(props => {
	console.log(props.goal);
	let goal = props.goal
	// let b = new Mongo.ObjectID(goal)
	console.log(goal);
	const subscription = Meteor.subscribe('goals');
	const loading = !subscription.ready();
	var qry = {}
	qry["_id"]= goal;
	const thisGoal = Goals.findOne(qry)
	console.log(thisGoal);
	return{loading, thisGoal}



}, TimelineMain);


// export default class TimelineMainWrapper extends Component  {
// 	constructor(props){
// 		super(props)
// 	}


// 	render(){
// 		console.log(this.props.goal);
// 		return(<div>we were here</div>)
// 	}
// }