import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { RiHomeHeartFill } from 'react-icons/ri';
import { MdArrowForwardIos } from 'react-icons/md';
import logo from '../assets/logo.png';
import { categories } from '../utils/data';

const isNotActiveStyle =
	'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-300 ease-in-out capitalize';
const isActiveStyle =
	'flex items-center px-5 gap-3 border-r-2 border-black font-extrabold duration-300 ease-in-out capitalize';

const Sidebar = ({ user, closeToggle }) => {
	const handleCloseSidebar = () => {
		if (closeToggle) closeToggle(false);
	};
	return (
		<div className='flex flex-col justify-between bg-white h-screen w-72'>
			<div>
				{/* Home image as a link */}
				<Link
					to='/'
					className='flex w-full items-center justify-center'
					onClick={handleCloseSidebar}
				>
					<img src={logo} alt='logo' className='w-2/3' />
				</Link>

				<div className='flex flex-col gap-6'>
					{/* Home link */}
					<NavLink
						to='/'
						className={({ isActive }) =>
							isActive ? isActiveStyle : isNotActiveStyle
						}
						onClick={handleCloseSidebar}
					>
						<RiHomeHeartFill size={30} />
						<p className='text-lg'>Home</p>
					</NavLink>

					<h3 className='mt-2 px-5 text-xl'>Discover categories</h3>

					{/* categories links */}
					{categories.slice(0, categories.length - 1).map(category => (
						<NavLink
							to={`/category/${category.name}`}
							className={({ isActive }) =>
								isActive ? isActiveStyle : isNotActiveStyle
							}
							onClick={handleCloseSidebar}
							key={category.name}
						>
							<img
								src={category.image}
								className='w-8 h-8 rounded-full shadow-sm'
								alt={category.name}
							/>
							<p className='text-lg'>{category.name}</p>
						</NavLink>
					))}
				</div>
			</div>

			{/* user profile at the bottom */}
			{user && (
				<Link
					to={`user-profile/${user._id}`}
					className='flex flex-row mb-8 gap-2 p-5 items-center bg-white rounded-lg shadow-lg mx-3'
					onClick={handleCloseSidebar}
				>
					<img
						src={user.image}
						className='w-10 h-10 rounded-full'
						alt='user-profile'
					/>
					<p className='text-lg'>{user.userName}</p>
					<MdArrowForwardIos />
				</Link>
			)}
		</div>
	);
};

export default Sidebar;
