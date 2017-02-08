import React, {Component} from 'react';
import {render} from 'react-dom';

export default class MakeMoreButton extends Component{
	constructor(){
		super();
	}

	render(){
		return(
			<button onClick={this.props.makeMore}></button>
			)
	}

}