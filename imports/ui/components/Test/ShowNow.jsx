import React, {Component} from 'react';
import {render} from 'react-dom';

export default class ShowNow extends Component{
	constructor(){
		super();
	}

	render(){
		return(
			<div> {this.props.count} </div>
			)
	}

}