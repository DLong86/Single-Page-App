import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-5xl sm:text-4xl text-2xl font-bold py-2'>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime?</p>
            </div>
            <div className='my-4'>
                <input className='p-3 w-full rounded-md text-black ' type="email" placeholder='Enter email' />
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium  my-6 px-6 py-3 text-black hover:bg-gray-800 hover:text-[#00df9a] ease-in-out duration-500 md:mx-0'>Notify Me</button>
            <p>Lorem ipsum dolor sit amet consectetur <span className='text-[#00df9a]'>adipisicing</span> elit. Architecto, ab?</p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter