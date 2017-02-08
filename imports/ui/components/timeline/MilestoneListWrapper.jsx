import React, {Component} from 'react';
import {render} from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import MilestoneMain from "./MilestoneMain.jsx"


export default createContainer(props => {
	console.log(props.goal);
	let goal = props.goal._id
	// let b = new Mongo.ObjectID(goal)
	console.log(goal);
	const subscription = Meteor.subscribe('milestones');
	const loading = !subscription.ready();
	var qry = {}
	qry["goal"]= goal;
	const milestones = Milestones.find(qry).fetch()
	console.log(milestones);
	return{loading, milestones}



}, MilestoneMain);