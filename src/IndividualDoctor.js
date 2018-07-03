import React from 'react';
import SimiliarDoctors from './SimiliarDoctors';
const IndividualDoctor = (props) => {
  return(
    <div>
    <div>
      {props.foundDoctor[0].name}
      {props.foundDoctor[0].specialty}
      {props.foundDoctor[0].location}
      {props.foundDoctor[0].phone}
    </div>
    <div>
      <SimiliarDoctors
        allDoctors = {props.allDoctors}
        specialty = {props.foundDoctor[0].specialty}
        indivDoctorId = {props.foundDoctor[0].id}
        />
    </div>
    </div>
  )
}

export default IndividualDoctor;