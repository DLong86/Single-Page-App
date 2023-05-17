import React from 'react';

const Cards = () => {
	return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    {/* <img src="" alt="" /> */}
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-xl font-bold'>lorem00</p>
                    <div className='text-center font-medium '>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem, ipsum dolor.</p>
                        <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit.</p>
                        <p className='py-2 border-b mx-8'>Lorem, ipsum dolor.</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 py-3 text-black hover:bg-gray-200 ease-in-out duration-500'>Click Me</button>
                </div>
                <div className="w-full shadow-xl flex flex-col bg-gray-100 p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300">
                    {/* <img src="" alt="" /> */}
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-xl font-bold'>Lorem 2</p>
                    <div className='text-center font-medium '>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem, ipsum dolor.</p>
                        <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit.</p>
                        <p className='py-2 border-b mx-8'>Lorem, ipsum dolor.</p>
                    </div>
                    <button className='bg-black w-[200px] rounded-md font-medium mx-auto my-6 py-3 text-[#00df9a] hover:bg-[#00df9a] hover:text-black ease-in-out duration-500'>Click Me</button>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    {/* <img src="" alt="" /> */}
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-xl font-bold'>lorem 3</p>
                    <div className='text-center font-medium '>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem, ipsum dolor.</p>
                        <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit.</p>
                        <p className='py-2 border-b mx-8'>Lorem, ipsum dolor.</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 py-3 text-black hover:bg-gray-200 ease-in-out duration-500'>Click Me</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;
