import React from 'react';
import render from 'react-dom';




export default class Home extends React.Component{


	constructor(props){
		super(props)
	}

	render(){


		return(

			<div>
				
				
				<div className='mainContent'>
				{this.props.content}
			
				</div>
			</div>




			)
	}




}

		
		






	