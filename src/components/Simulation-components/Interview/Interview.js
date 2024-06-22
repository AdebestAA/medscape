import React from 'react'
import PatientInterview from './PatientInterview'
import VideoInterview from './VideoInterview'
import "./interview.css"

const Interview = () => {
  return (
    <main className='interview-container'>
      <PatientInterview/>
      <VideoInterview/>
    </main>
  )
}

export default Interview
