import React from 'react'
import { PayRateFilter, ServicesFilter } from '../types/customer'

interface FilterSidebarProps {
  payRate: PayRateFilter;
  services: ServicesFilter;
  onPayRateChange: (value: PayRateFilter) => void;
  onServicesChange: (service: keyof ServicesFilter, value: boolean) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ payRate, services, onPayRateChange, onServicesChange }) => {
  
  const handlePayRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Assuming the input's name attribute is set to 'min' or 'max' corresponding to PayRateFilter properties
    const { name, value } = event.target;
    onPayRateChange({
      ...payRate,
      [name]: Number(value),
    });
  };

  const handleServiceChange = (service: keyof ServicesFilter) => (event: React.ChangeEvent<HTMLInputElement>) => {
    onServicesChange(service, event.target.checked);
  };

  return (
    <aside className="filter-sidebar">
      <div className="filter-section">
        <label htmlFor="payRateMin">Pay Rate:</label>
        <input
          type="range"
          name="min"
          id="payRateMin"
          min="0"
          max="100"
          value={payRate.min}
          onChange={handlePayRateChange}
        />
        <input
          type="range"
          name="max"
          id="payRateMax"
          min="0"
          max="100"
          value={payRate.max}
          onChange={handlePayRateChange}
        />
        <div>
          ${payRate.min} - ${payRate.max}
        </div>
      </div>
      <div className="filter-section">
        <h4>Can help with</h4>
        {(Object.keys(services) as Array<keyof ServicesFilter>).map(service => (
          <label key={service}>
            <input
              type="checkbox"
              checked={services[service]}
              onChange={handleServiceChange(service)}
            />
            {service}
          </label>
        ))}
      </div>
      <button className="apply-filters">Apply filters</button>
    </aside>
  );
};

export default FilterSidebar