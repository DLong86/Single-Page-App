import React from 'react';
import Typed from 'react-typed';

function Hero() {
	return (
		<div className='text-white'>
			<div className='max-w-[900px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
				<p className='uppercase text-[#00df9a] font-bold p-2'>
					Growing with data analytics
				</p>
				<h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
					Grow with data
				</h1>
				<div className='flex flex-row justify-center items-center'>
					<p className='md:text-5xl sm:text-4xl text-xl font-semibold py-4'>
						Fast, flexible financing for
					</p>
					<Typed
						className='md:text-5xl sm:text-4xl text-xl font-semibold pl-2 md:pl-4'
						strings={[
							'Hello',
							'Ciao',
							'olá',
							'Bonjour',
							'こんにちは',
							'Guten Tag',
							'Good-Day',
							'مرحبًا',
						]}
						typeSpeed={120}
						backSpeed={150}
						loop
					/>
				</div>
				<p className='md:text-2xl text-xl font-semibold text-gray-500'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
					quas?
				</p>
				<button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 py-3 text-black hover:bg-gray-800 hover:text-[#00df9a] ease-in-out duration-500'>
					Get Started
				</button>
			</div>
		</div>
	);
}

export default Hero;
