import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
        <h1 className='text-[28px] md:text-[34px] relative font-bold text-gray-800 max-w-3xl mx-auto'>Empower your future with the courses designed to <span className='text-blue-600'> fit your choice. </span> <img src={assets.sketch} alt="sketch"  className='md:block hidden absolute -bottom-7 right-0'/></h1>
        <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>LearnFlow is your all-in-one platform for online learning and teaching. Whether you're a student eager to expand your knowledge or an educator ready to share your expertise, LearnFlow makes the process simple, interactive, and effective.</p>
        
        <p className='md:hidden text-gray-500 max-w-sm mx-auto'>Explore a wide range of courses, enroll with ease, track your learning progress, and enjoy high-quality video lectures. Start your learning journey today — anytime, anywhere.</p>
        <SearchBar />
    </div>
  )
}

export default Hero