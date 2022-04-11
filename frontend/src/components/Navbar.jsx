import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import { BsSearch } from 'react-icons/bs';

const Navbar = ({ searchTerm, setSearchTerm, user }) => {
	const navigate = useNavigate();

	if (!user) return null;

	return (
		<div className='flex gap-2 md:gap-5 w-full mt-5 pb-7'>
			{/* search box */}
			<div className='flex justify-start items-center w-full px-2 rounded-md bg-white focus-within:shadow-md'>
				<BsSearch size={16} className='ml-2' />
				<input
					type='text'
					onChange={e => setSearchTerm(e.target.value)}
					placeholder='Search'
					value={searchTerm}
					onFocus={() => navigate('/search')}
					className='p-2 w-full bg-white outline-none'
				/>
			</div>

			{/* user profile and add image */}
			<div className='flex gap-3'>
				{/* user profile image as link */}
				<Link to={`user-profile/${user?._id}`} className='hidden md:block'>
					<img
						src={user.image}
						alt='user-profile-img'
						className='w-14 h-12 rounded-lg'
					/>
				</Link>

				{/* add icon as link */}
				<Link
					to='/create-pin'
					className='bg-black text-white rounded-lg w-12 h-12 md:w-14 flex justify-center items-center'
				>
					<IoMdAdd size={30} />
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
