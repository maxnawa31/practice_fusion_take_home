import React from 'react';
import { Link } from 'react-router-dom'
import './DoctorList.css'
const DoctorList = (props) => {
  let doctors = props.allDoctors.map(doctor => {
    return (
      <div key={doctor.id} className = 'doctor-card'>
        <div>
          {doctor.name}
        </div>
        <div>
        {doctor.specialty}
        </div>
        <button className='button-style'>
          <Link to = {`/doctors/${doctor.id}`}>More Info</Link>
        </button>
      </div>
    )
  })
  return(
    <div className = 'doctor-container'>
      {doctors}
      </div>
  )
}

export default DoctorList;