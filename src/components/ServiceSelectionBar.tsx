import React from 'react'

interface ServiceSelectionBarProps {
  selectedService: string;
  onSelectService: (service: string) => void;
}

const ServiceSelectionBar: React.FC<ServiceSelectionBarProps> = ({ selectedService, onSelectService }) => {
  const services = ['Child care', 'Senior care', 'Housekeeping', 'Pet care', 'Tutoring'];
  
  return (
    <nav className="service-selection-bar">
      {services.map(service => (
        <button
          key={service}
          className={selectedService === service ? 'selected' : ''}
          onClick={() => onSelectService(service)}
        >
          {service}
        </button>
      ))}
    </nav>
  );
};

export default ServiceSelectionBar