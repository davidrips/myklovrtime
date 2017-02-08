import React, {Component} from 'react';
import {render} from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import GoalSet from './GoalSet.jsx'

export default createContainer(() => {
	const subscription = Meteor.subscribe('goals');
	const loading = !subscription.ready();
	const allGoals = Goals.find().fetch();

	return{loading, allGoals}



}, GoalSet);