import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUser } from '../store';
import { useThunk } from '../hooks/use-thunk';
import { useNavigate } from 'react-router-dom';

function Header() {
	const [doFetchUser, isLoadingUser, loadingUserError] = useThunk(fetchUser);
	const navigate = useNavigate();
	const { user } = useSelector((state) => {
		return state.auth;
	});
	useEffect(() => {
		doFetchUser();
	}, [doFetchUser]);

	let content;
	if (isLoadingUser) {
		content = <div>Loading User...</div>;
	} else if (loadingUserError) {
		content = <div>Error fetching user...</div>;
	}
	if (user) {
		content = (
			<li key='1'>
				<a href='/api/logout'>Logout</a>{' '}
			</li>
		);
	} else {
		content = (
			<li>
				<a href='/auth/google'>Login With Google</a>
			</li>
		);
	}

	return (
		<nav>
			<div className='nav-wrapper'>
				<button
					onClick={() => navigate(user ? '/display' : '/')}
					className='left brand-logo'
				>
					Car Data
				</button>
				<ul className='right'>{content}</ul>
			</div>
		</nav>
	);
}

export default Header;
