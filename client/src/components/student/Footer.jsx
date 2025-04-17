import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
        <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
          <div className='flex flex-col md:items-start items-center w-full'>
           <img src={assets.logo_dark} alt="logo" />
           <p className='mt-6 text-center md:text-left text-sm text-white/80'>LearnFlow is your gateway to limitless learning.Access knowledge anytime, anywhere, at your pace.
            Empower your journey with modern, flexible education.</p>
          </div>
          <div className='flex flex-col md:items-start items-center w-full'>
            <h2 className='font-semibold text-white mb-5'>Company</h2>
            <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2'>
                <li href="#">Home</li>
                <li href='#'>About Us</li>
                <li href='#'>Contact Us</li>
                <li href="#">Privacy Policy</li>
            </ul>
          </div>
          <div className='hidden md:flex flex-col items-start w-full'>
            <h2 className='font-semibold text-white mb-5'>Subscribe to our newsletter</h2>
            <p className='text-sm text-white/80'>The latest news,articles, and resources , send to your inbox weekly</p>
          </div>
          <div className='flex items-center gap-2 pt-4'>
            <input type='email' placeholder='Enter your email'
            className='border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm'
            />
            <button className='bg-blue-600 w-24 h-9 text-white rounded'>Subscribe</button>
          </div>
        </div>
        <p className='py-4 text-center text-xs md:text-sm text-white/60'>Copyright © 2025 LearnFlow by Jana. All rights reserved.</p>
    </footer>
  )

}

export default Footer