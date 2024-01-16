import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ServiceSelectionBar from "../../components/ServiceSelectionBar";
import FilterSidebar from "../../components/FilterSidebar";
import CaregiverList from "../../components/CaregiverList";
import CustomerJobs from "../../components/CustomerJobs"; // Import the component for customer jobs
import { Caregiver, PayRateFilter, ServicesFilter } from "../../types/customer";
import { selectUserType } from "../../redux/reducers/user/user";

const initialPayRate: PayRateFilter = { min: 14, max: 50 };
const initialServices: ServicesFilter = {
  bathroomCleaning: false,
  carpetCleaning: false,
  kitchenCleaning: false,
  laundry: false,
  windowCleaning: false,
};

const dummyCaregivers: Caregiver[] = [
  // Populate with some dummy caregiver data
];

const FindCare: React.FC = () => {
  const [payRate, setPayRate] = useState<PayRateFilter>(initialPayRate);
  const [services, setServices] = useState<ServicesFilter>(initialServices);
  const [caregivers, setCaregivers] = useState<Caregiver[]>(dummyCaregivers);

  const userType = useSelector(selectUserType); // Determine the user type (caregiver or customer)

  const handlePayRateChange = (updatedPayRate: PayRateFilter) => {
    setPayRate(updatedPayRate);
    // Here you would also update the caregiver list based on the new filters
  };

  const handleServicesChange = (
    service: keyof ServicesFilter,
    value: boolean
  ) => {
    setServices({
      ...services,
      [service]: value,
    });
    // Here you would also update the caregiver list based on the new filters
  };

  // This component would also handle fetching caregivers based on the selected filters

  return (
    <div className="main-layout">
      <ServiceSelectionBar
        selectedService={""} // You would manage this state and pass the selected service
        onSelectService={() => {}} // You would implement this handler
      />
      <div className="content">
        <FilterSidebar
          payRate={payRate}
          services={services}
          onPayRateChange={handlePayRateChange}
          onServicesChange={handleServicesChange}
        />
        {userType === "customer" ? (
          <CaregiverList caregivers={caregivers} />
        ) : (
          <CustomerJobs /> // Display different content for customers
        )}
      </div>
    </div>
  );
};

export default FindCare;
