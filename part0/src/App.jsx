import React, { useState } from 'react'
import Header from './components/Header';
import Content from './components/Content'
import Total from './components/Total'
// import MuiTabs from './components/DeliveryLocation'
import { motion } from "framer-motion";


function App() {
const course = 'Half Stack application development';
const parts = [
  {name: 'Fundamentals of React', exercises: 10},
  {name: 'Using props to pass data', exercises: 7},
  {name: 'State of a component', exercises: 14},
]
  return (
    <motion.div className='m-3'>
      
      <Header course= {course}/>
      <Content parts= {parts}/>
      <Total />
    </motion.div>
  )
}

export default App
