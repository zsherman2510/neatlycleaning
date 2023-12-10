import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProperty } from "../redux/reducers/createCustomerReducer";
const PropertyDetails: React.FC = () => {
  const [address, setAddress] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [sqFootage, setSqFootage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
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

  const handleNext = () => {
    const property = {
      address,
      bedrooms,
      bathrooms,
      sqFootage
    }

    dispatch(addProperty(property))
    navigate('/user')
  };

  return (
    <>
      <div className="container">
        <div className="care-question">Enter your property details</div>
        <div className="container" style={{ "marginTop": "10px", "padding": "30px" }}>
          <div className="input-group">
            <input
              type="text"
              value={address}
              placeholder="Address"
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
              className="input-field"
            />
          </div>
          <div className="input-group">
            <input
              type="number"
              value={bathrooms}
              placeholder="Bathrooms"
              onChange={handleBathroomsChange}
              className="input-field"
            />
          </div>
          <div className="input-group">
            <input
              type="number"
              value={sqFootage}
              placeholder="SQ FT"
              onChange={handleSqFootageChange}
              className="input-field"
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
