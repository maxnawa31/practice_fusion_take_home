import React from 'react';
import SimiliarDoctors from './SimiliarDoctors';
import './IndividualDoctor.css'
import { Link } from 'react-router-dom';
const IndividualDoctor = (props) => {
  return(
    <div className='indiv-container'>
    <h3 className='see-all-doctors'><Link to ='/'>See All Doctors</Link></h3>
    <div className='found-doctor'>
      <h3>You are now viewing: {props.foundDoctor[0].name}</h3>
      {/* <p>{props.foundDoctor[0].name}</p> */}
      <p>Specialty: {props.foundDoctor[0].specialty}</p>
      <p>Location: {props.foundDoctor[0].location}</p>
      <p>Phone Number: {props.foundDoctor[0].phone}</p>
    </div>
    <h3 className='similiar-doctor-headline'>Doctors who also specialize in {props.foundDoctor[0].specialty}</h3>
    <div className = 'similiar-container'>
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