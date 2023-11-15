import React from 'react'
import { Caregiver } from '../types/customer';


interface CaregiverCardProps {
  caregiver: Caregiver;
}

const CaregiverCard: React.FC<CaregiverCardProps> = ({ caregiver }) => {
  return (
    <div className="caregiver-card">
      <img src={caregiver.photoUrl} alt={`${caregiver.name}'s profile`} />
      <div>{caregiver.name}</div>
      <div>{caregiver.location}</div>
      <div>{`$${caregiver.rate} per hour`}</div>
      <button>Contact</button>
    </div>
  );
};

export default CaregiverCard