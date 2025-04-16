import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CoursesSection from '../../components/student/CoursesSection'
import CourseCard from '../../components/student/CourseCard'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
        <Hero />
        <Companies />
        <CoursesSection/>
        
    </div>
  )
}

export default Home