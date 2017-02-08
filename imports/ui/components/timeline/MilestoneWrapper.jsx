import React, {Component} from 'react';
import {render} from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import Milestone from "./Milestone.jsx"


export default createContainer(props => {
	console.log(props.theKey);
	let mile = props.theKey
	console.log(mile);
	const subscription = Meteor.subscribe('steps');
	const loading = !subscription.ready();
	var qry = {}
	qry["mile"]= mile;
	const steps = Steps.find(qry).fetch()
	console.log(steps);
	return{loading, steps}



}, Milestone);