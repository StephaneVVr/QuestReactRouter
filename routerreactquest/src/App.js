import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import History from './history';
import Header from './Header';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/notre-histoire' component={History} />
			</Switch>
		</div>
	);
}

export default App;
