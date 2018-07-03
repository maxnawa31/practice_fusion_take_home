import React from 'react';
import './SimiliarDoctors.css'
import { Link } from 'react-router-dom';
const SimiliarDoctors = (props) => {
  let similiarDoctorsList = props.allDoctors.filter(doctor => {
    return (doctor.specialty === props.specialty && doctor.id !== props.indivDoctorId)
  }).map(similiarDoctor => {
    return (
      <div className='similiar-card'>
        <p>{similiarDoctor.name}</p>
        <p>{similiarDoctor.specialty}</p>
        <button className='button-style-similiar'><Link to = {`/doctors/${similiarDoctor.id}`}> See more about this doctor</Link></button>
      </div>
    )
  })
  return (
    <div className ='similiar-container'>
      {similiarDoctorsList}
    </div>
  )
}

export default SimiliarDoctors;