import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUser } from '../store';
import Button from './Button';
import Skeleton from './Skeleton';
import { useThunk } from '../hooks/use-thunk';
import { useNavigate } from 'react-router-dom';

function Header() {
	const [doFetchUser, isLoadingUser, loadingUserError] = useThunk(fetchUser);
	const navigate = useNavigate();
	const { user } = useSelector((state) => {
		return state.auth;
	});
	const handleLogout = () => {
		window.location.href = '/api/logout';
	};
	const handleLogin = () => {
		window.location.href = '/auth/google';
	};
	useEffect(() => {
		doFetchUser();
	}, [doFetchUser]);

	let content;
	if (isLoadingUser) {
		content = (
			<Skeleton
				times={6}
				className='h-10 w-full'
			/>
		);
	} else if (loadingUserError) {
		content = <div>Error fetching user...</div>;
	}
	if (user) {
		content = (
			<Button
				className=' text-yellow-200 hover:cursor-pointer'
				onClick={handleLogout}
				loading={isLoadingUser}
			>
				Logout
			</Button>
		);
	} else {
		content = (
			<Button
				className=' text-yellow-200 hover:cursor-pointer'
				onClick={handleLogin}
				loading={isLoadingUser}
			>
				Login With Google
			</Button>
		);
	}
	return (
		<div className='h-20 w-screen flex flex-row justify-between items-center  bg-blue-500'>
			<div className='m-2'>
				<Button
					onClick={() => navigate(user ? '/display' : '/')}
					loading={isLoadingUser}
					className=' text-yellow-200 hover:cursor-pointer'
				>
					Car Data
				</Button>
			</div>
			<div className='m-3'>{content}</div>
		</div>
	);
}

export default Header;
