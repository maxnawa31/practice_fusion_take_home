import React from 'react';
import './SimiliarDoctors.css'
const SimiliarDoctors = (props) => {
  let similiarDoctorsList = props.allDoctors.filter(doctor => {
    return (doctor.specialty === props.specialty && doctor.id !== props.indivDoctorId)
  }).map(similiarDoctor => {
    return (
      <div className='similiar-card'>
        <p>{similiarDoctor.name}</p>
        <p>{similiarDoctor.specialty}</p>
        <p>{similiarDoctor.location}</p>
        <p>{similiarDoctor.phone}</p>
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