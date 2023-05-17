import React from 'react'
import img1 from "../assets/photo-1551522435-a13afa10f103.avif"

export default function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={img1} alt="/" />
          <div className='flex flex-col justify-center md:px-4'>
            <p className='text-[#00df9a] font-bold uppercase'>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            <h1 className='text-2xl font-bold py-2 sm:text-3xl md:4xl'>Lorem ipsum dolor sit.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illo ipsum nulla beatae veniam. Saepe iure accusamus repudiandae obcaecati veniam! Praesentium dolore corporis et optio laborum hic tenetur? Facilis, quibusdam.</p>
            <button className='bg-gray-800 w-[200px] rounded-md font-medium mx-auto my-6 py-3 text-[#00df9a] hover:bg-[#00df9a] hover:text-black ease-in-out duration-500 md:mx-0'>Get Started</button>
          </div>
        </div>
    </div>
  )
}

