import React from 'react'
import { Link } from 'react-router-dom'

const CoursesSection = () => {
  return (
    <div className='py-16 md:px-40 px-8'>

        <h2 className='text-3xl font-medium text-gray-800'>Learn from the best</h2>
        <p className='text-sm md:text-base text-gray-500 mt-3'>Learn from industry experts, master in-demand skills, and accelerate your learning journey with our most loved and highest-rated courses on LearnFlow.</p>
        <Link to={'/course-list'} onClick={() => scrollTo(0,0)} className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'> Show All Courses</Link>
    </div>
  )
}

export default CoursesSection