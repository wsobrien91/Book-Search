import React from 'react';

const Header = () => {
	return (
		<>
			<nav className='navbar navbar-dark bg-dark'>
				<div className='container-fluid'>
					<a className='navbar-brand' href='/'>
						<i className='fas fa-book'></i>
						Book Search
					</a>
				</div>
			</nav>
		</>
	);
};

export default Header;