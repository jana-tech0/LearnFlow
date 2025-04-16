import React, { useState, useEffect, useContext } from 'react';
import { createContext } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from 'react-router-dom';
export const AppContext = createContext();


export const AppContextProvider = (props) => {
     
    const currency = import.meta.env.VITE_CURRENCY
     const navigate = useNavigate()
    const [allCourses, setAllCourses] = useState([])

    // Fetch all courses 

    const fetchAllCourses = async() => {
        setAllCourses(dummyCourses)
    }

    const value = {
        currency,
        allCourses,
        navigate
    }

    useEffect(() => {
          fetchAllCourses()
    },[])


  return(
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
  )
}
