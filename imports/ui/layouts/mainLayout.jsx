import React from 'react';
import render from 'react-dom';
import MainLayoutInner from "./MainLayoutInner.jsx"
import store from "../../startup/both/create-store.js"



export const MainLayout = ({content}) => (


		
		
			<MainLayoutInner content={content} store={store}/>
	





	)