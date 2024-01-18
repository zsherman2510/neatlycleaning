import React from "react";
import { Caregiver } from "../types/customer";

interface CaregiverCardProps {
  caregiver: Caregiver;
}

const CaregiverCard: React.FC<CaregiverCardProps> = ({ caregiver }) => {
  return (
    <div className="caregiver-card">
      <img
        src={caregiver.profilePhotoUrl}
        alt={`${caregiver.lastName}'s profile`}
      />
      <div>
        {caregiver.lastName}, {caregiver.firstName}
      </div>
      <div>{caregiver.preferredServiceAreas[0]}</div>
      <div>{`$${caregiver.payRate} per hour`}</div>
      <button>Contact</button>
    </div>
  );
};

export default CaregiverCard;
