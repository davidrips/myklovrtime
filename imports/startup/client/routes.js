import { FlowRouter } from 'meteor/kadira:flow-router';
import React from 'react';
import { mount } from 'react-mounter';

// Import needed templates
import { MainLayout } from '../../ui/layouts/mainLayout.jsx';
import Test from "../../ui/components/Test/test.jsx"
import GoalSetWrapper from "../../ui/components/goals/GoalSetWrapper.jsx"
import TimelineView from "../../ui/components/timeline/TimelineView.jsx"
import Navbar from "../../ui/components/Nav/Navbar.jsx"


// Set up all routes in the app
FlowRouter.route('/', {

  action() {
   mount(MainLayout, {

   	content: (<div><Navbar /><GoalSetWrapper /></div>)
   })
  },
});

FlowRouter.route('/timeline', {

  action() {
   mount(MainLayout, {
   	content: (<div><Navbar /><TimelineView /></div>)
   })
  },
});

