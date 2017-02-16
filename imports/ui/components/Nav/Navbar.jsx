
import React, {Component} from 'react';
import {render} from 'react-dom';
import Button from "react-bootstrap/lib/Button"
import Nav from "react-bootstrap/lib/Nav"

	export default class Navbar extends Component {

		handleClick(){
			FlowRouter.go("/")
		}

		render(){
			return(
			<Nav>
				<div className="navDiv"><Button className='homeButton' onClick={this.handleClick.bind(this)}>Home</Button>
				</div>
			</Nav>
				)
		}
	}