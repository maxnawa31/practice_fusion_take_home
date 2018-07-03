import React from 'react';
import { Link } from 'react-router-dom'
const DoctorList = (props) => {
  let doctors = props.allDoctors.map(doctor => {
    return (
      <div>
        <div>
          {doctor.name}
        </div>
        <div>
        {doctor.specialty}
        </div>
        <button>
          <Link to = {`/doctors/${doctor.id}`}>More Info</Link>
        </button>
      </div>
    )
  })
  return(
    <div>
      {doctors}
      </div>
  )
}

export default DoctorList;