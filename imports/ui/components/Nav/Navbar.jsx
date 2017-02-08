
import React, {Component} from 'react';
import {render} from 'react-dom';

	export default class Navbar extends Component {

		handleClick(){
			FlowRouter.go("/")
		}

		render(){
			return(
				<div className="navDiv"><button onClick={this.handleClick.bind(this)}>Home</button></div>
				)
		}
	}