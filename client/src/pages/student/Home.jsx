import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CoursesSection from '../../components/student/CoursesSection'
import CourseCard from '../../components/student/CourseCard'
import TestomonialsSection from '../../components/student/TestomonialsSection'
import CallToAction from '../../components/student/CallToAction'
import Footer from '../../components/student/Footer'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
        <Hero />
        <Companies />
        <CoursesSection/>
        <TestomonialsSection />
        <CallToAction />
        <Footer/>
    </div>
  )
}

export default Home