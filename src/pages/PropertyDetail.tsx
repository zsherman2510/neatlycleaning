import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProperty } from "../redux/reducers/createCustomerReducer";
const PropertyDetails: React.FC = () => {
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [sqFootage, setSqFootage] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [isPrimary, setIsPrimary] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // Use the name attribute of the input element to determine which property to update
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleBedroomsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBedrooms(event.target.value);
  };

  const handleBathroomsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBathrooms(event.target.value);
  };

  const handleSqFootageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSqFootage(event.target.value);
  };

  const handlePropertyTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPropertyType(event.target.value);
  };

  const handleIsPrimaryChange = () => {
    setIsPrimary(!isPrimary); // Toggle the value between true and false
  };

  const handleNext = () => {
    const addressString = `${address.street} ${address.city}, ${address.state}, ${address.zip}`;
    const property = {
      address: addressString,
      bedrooms,
      bathrooms,
      sqFootage,
      propertyType,
      isPrimary,
    };

    dispatch(addProperty(property));
    navigate("/user");
  };

  return (
    <>
      <div className="container">
        <div className="care-question">Enter your property details</div>
        <div
          className="container"
          style={{ marginTop: "10px", padding: "30px" }}
        >
          <div className="input-group">
            <select
              id="propertyType"
              value={propertyType}
              onChange={handlePropertyTypeChange}
              className="input-field"
            >
              <option value="">Select Property Type</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Condo">Condo</option>
              {/* Add more property types as needed */}
            </select>
            <input
              type="text"
              name="street"
              value={address.street}
              placeholder="Street"
              onChange={handleAddressChange}
              className="input-field"
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={address.city}
              onChange={handleAddressChange}
              className="input-field"
            />

            <input
              type="text"
              name="state"
              placeholder="State"
              value={address.state}
              onChange={handleAddressChange}
              className="input-field"
            />

            <input
              type="text"
              name="zip"
              placeholder="Postal Code"
              value={address.zip}
              onChange={handleAddressChange}
              className="input-field"
            />
          </div>

          <div className="input-group">
            <input
              type="number"
              value={bedrooms}
              placeholder="Bedrooms"
              onChange={handleBedroomsChange}
              className="small_input-field"
            />
            <input
              type="number"
              value={bathrooms}
              placeholder="Bathrooms"
              onChange={handleBathroomsChange}
              className="small_input-field"
            />
            <input
              type="number"
              value={sqFootage}
              placeholder="SQ FT"
              onChange={handleSqFootageChange}
              className="small_input-field"
            />
          </div>
          <div className="input-group">
            <label htmlFor="isPrimary">Primary Residence?:</label>
            <input
              type="checkbox"
              id="isPrimary"
              checked={isPrimary}
              onChange={handleIsPrimaryChange}
              className="checkbox-field"
            />
          </div>
          <button className="care-next" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;
