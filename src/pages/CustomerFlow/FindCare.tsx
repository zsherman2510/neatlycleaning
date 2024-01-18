import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ServiceSelectionBar from "../../components/ServiceSelectionBar";
import FilterSidebar from "../../components/FilterSidebar";
import CaregiverList from "../../components/CaregiverList";
import CustomerJobs from "../../components/CustomerJobs"; // Import the component for customer jobs
import {
  Caregiver,
  PayRateFilter,
  EnumServiceItem,
  Job,
} from "../../types/customer";
import { selectUserType } from "../../redux/reducers/user/user";
import { getCareGivers, getJobs } from "../../api/user";

const initialPayRate: PayRateFilter = { min: 14, max: 50 };
const options = [
  { id: 0, label: "Bathroom Cleaning", key: "bathroomCleaning", value: false },
  { id: 1, label: "Carpet Cleaning", key: "carpetCleaning", value: false },
  { id: 2, label: "Kitchen Cleaning", key: "kitchenCleaning", value: false },
  { id: 3, label: "Laundry", key: "laundry", value: false },
  { id: 4, label: "Window Cleaning", key: "windowCleaning", value: false },
];

const FindCare: React.FC = () => {
  const [payRate, setPayRate] = useState<PayRateFilter>(initialPayRate);
  const [services, setServices] = useState<EnumServiceItem[]>(options);
  const [caregivers, setCaregivers] = useState<Caregiver[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const userType = useSelector(selectUserType); // Determine the user type (caregiver or customer)
  console.log(userType, "userType");
  useEffect(() => {
    const fetchCaregivers = async () => {
      try {
        const response = await getCareGivers(); // Assuming this function returns the caregivers
        setCaregivers(response); // Update the caregivers state with the fetched data
      } catch (error) {
        console.error("Error fetching caregivers:", error);
      }
    };

    const fetchJobs = async () => {
      try {
        const response = await getJobs();
        setJobs(response);
      } catch (e) {
        console.error("Error fetching Jobs", e);
      }
    };

    if (userType === "customer") {
      fetchCaregivers(); // Fetch caregivers when the component mounts
    } else {
      fetchJobs();
    }
  }, [userType]);

  const handlePayRateChange = (updatedPayRate: PayRateFilter) => {
    setPayRate(updatedPayRate);
    // Here you would also update the caregiver list based on the new filters
  };

  const handleServicesChange = (service: EnumServiceItem) => {
    const updatedServices = services.map((item) =>
      item.label === service.label
        ? { ...item, value: !item.value } // Toggle the value property
        : item
    );
    setServices(updatedServices);
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
          <CustomerJobs jobs={jobs} /> // Display different content for customers
        )}
      </div>
    </div>
  );
};

export default FindCare;
