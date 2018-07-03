import React from 'react';

const SimiliarDoctors = (props) => {
  let similiarDoctorsList = props.allDoctors.filter(doctor => {
    return (doctor.specialty === props.specialty && doctor.id !== props.indivDoctorId)
  }).map(similiarDoctor => {
    return (
      <div>
        {similiarDoctor.name}
        {similiarDoctor.specialty}
        {similiarDoctor.location}
        {similiarDoctor.phone}
      </div>
    )
  })
  return (
    <div>
      {similiarDoctorsList}
    </div>
  )
}

export default SimiliarDoctors;