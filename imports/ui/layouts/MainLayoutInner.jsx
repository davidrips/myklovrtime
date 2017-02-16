import React from "react";
import Home from "./Home.jsx";
import { Provider } from 'react-redux'

export default class MailLayoutInner extends React.Component {
	render(){
		return(
			<Provider store={this.props.store}>
				<Home content={this.props.content} />
			</Provider>

			)
	}
}