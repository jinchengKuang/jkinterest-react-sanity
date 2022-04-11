import React from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import backVideo from '../assets/backVideo.mp4';
import logo from '../assets/logo.png';

import { client } from '../client';

const Login = () => {
	const navigate = useNavigate();
	const responseGoogle = response => {
		localStorage.setItem('user', JSON.stringify(response.profileObj));
		const { name, googleId, imageUrl } = response.profileObj;
		const doc = {
			_id: googleId,
			_type: 'user',
			userName: name,
			image: imageUrl,
		};
		client.createIfNotExists(doc).then(() => {
			navigate('/', { replace: true });
		});
	};

	return (
		<div className='flex justify-start items-center flex-col h-screen'>
			<div className='relative w-full h-full '>
				<video
					src={backVideo}
					type='video/mp4'
					loop
					controls={false}
					muted
					autoPlay
					className='w-full h-full object-cover grayscale '
				/>

				<div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 backdrop-blur-sm bg-contain'>
					<div className='p-5'>
						<img
							src={logo}
							width='130px'
							className='rounded-full bg-red-50'
							alt='logo'
						/>
					</div>

					<div className='shadow-2xl'>
						<GoogleLogin
							clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
							render={renderProps => (
								<button
									type='button'
									className='bg-red-50 font-sans text-xl flex justify-center items-center p-5 rounded-2xl cursor-pointer outline-none hover:bg-orange-100 transition-all ease-in-out duration-300'
									onClick={renderProps.onClick}
									disabled={renderProps.disabled}
								>
									<FcGoogle className='mr-3 text-3xl' /> Sign in with Google
								</button>
							)}
							onSuccess={responseGoogle}
							onFailure={responseGoogle}
							cookiePolicy='single_host_origin'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
