import React from "react";
import { PayRateFilter, EnumServiceItem } from "../types/customer";

interface FilterSidebarProps {
  payRate: PayRateFilter;
  services: EnumServiceItem[];
  onPayRateChange: (value: PayRateFilter) => void;
  onServicesChange: (service: EnumServiceItem) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  payRate,
  services,
  onPayRateChange,
  onServicesChange,
}) => {
  const handlePayRateMinChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    onPayRateChange({
      ...payRate,
      min: Number(value),
    });
  };

  const handlePayRateMaxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    onPayRateChange({
      ...payRate,
      max: Number(value),
    });
  };

  const handleServiceChange = (serviceItem: EnumServiceItem) => {
    console.log(serviceItem, "serviceItem");
    onServicesChange(serviceItem);
  };

  return (
    <aside className="filter-sidebar">
      <div className="filter-section">
        <label htmlFor="payRateMin">Pay Rate (Min):</label>
        <input
          type="range"
          name="payRateMin"
          id="payRateMin"
          min="0"
          max="100"
          value={payRate.min}
          onChange={handlePayRateMinChange}
        />
        <div>${payRate.min}/ hour</div>
      </div>
      <div className="filter-section">
        <label htmlFor="payRateMax">Pay Rate (Max):</label>
        <input
          type="range"
          name="payRateMax"
          id="payRateMax"
          min="0"
          max="100"
          value={payRate.max}
          onChange={handlePayRateMaxChange}
        />
        <div>${payRate.max}/ hour</div>
      </div>
      <div className="filter-section">
        <h4>Can help with</h4>
        <div className="pill-container">
          {services.map((serviceItem) => (
            <label key={serviceItem.label} className="pill">
              <input
                type="checkbox"
                checked={serviceItem.value}
                onChange={() => handleServiceChange(serviceItem)}
              />
              {serviceItem.label}
            </label>
          ))}
        </div>
      </div>
      <button className="apply-filters">Apply filters</button>
    </aside>
  );
};

export default FilterSidebar;
