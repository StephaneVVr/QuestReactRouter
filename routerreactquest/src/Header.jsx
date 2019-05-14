import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<ul>
			<li>
				<NavLink
					activeStyle={{
						fontWeight: 'bold',
						color: 'red'
					}}
					exact
					to='/'
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					activeStyle={{
						fontWeight: 'bold',
						color: 'red'
					}}
					to='/notre-histoire'
				>
					History
				</NavLink>
			</li>
		</ul>
	);
};

export default Header;
