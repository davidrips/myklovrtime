import React, {Component} from 'react';
import {render} from 'react-dom';
import MakeMoreButton from './MakeMoreButton.jsx';
import ShowNow from './ShowNow.jsx';

export default class Test extends Component {
	constructor(){
		super();
		this.state={
			i:12
		}
	};

	componentWillMount(){

	}

	componentWillUnmount(){

	}
	makeMore(){
		console.log("make more");
		let old = this.state.i;
		this.setState({
			i: old+1
		})
	}

	render(){
		return(
				<div className='innerMain'>
					<ShowNow count={this.state.i} />
					<MakeMoreButton makeMore={this.makeMore.bind(this)} />
				</div>
				
			)
	}

}