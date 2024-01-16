import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { options } from "../../types/misc/utils";
import { updateCleanerDetails } from "../../redux/reducers/cleaner/createCleanerReducer";

const CleanerExperience = () => {
  const [yearsOfExperience, setYearsOfExperience] = useState<string>("");
  const [serviceOptions, setServiceOptions] = useState<string[]>([]);
  const [preferredZipCode, setPreferredZipCode] = useState<string>("");
  const [payrate, setPayRate] = useState<string>("0");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleCareSelection = (care: string) => {
    if (serviceOptions.includes(care)) {
      setServiceOptions(
        serviceOptions.filter((selectedTask) => selectedTask !== care)
      );
    } else {
      setServiceOptions([...serviceOptions, care]);
    }
  };

  const handleSubmit = () => {
    // Validate and submit the experience information
    if (
      !yearsOfExperience ||
      !serviceOptions ||
      !preferredZipCode ||
      !payrate
    ) {
      // Handle validation errors
      return;
    }

    // Dispatch action to store experience information in Redux
    const experienceInfo = {
      cleaningExperience: yearsOfExperience,
      cleaningServices: serviceOptions,
      preferredServiceArea: preferredZipCode,
      payRate: payrate,
    };
    dispatch(updateCleanerDetails(experienceInfo));

    // Redirect to the next step or completion page
    navigate("/profile");
  };

  return (
    <div className="container">
      <div className="care-question">Enter details about your services</div>
      <form>
        <div className="task-list">
          <label htmlFor="servicesOffered">Services Offered:</label>
          {options.map((care, index) => (
            <div key={index} className="task-item">
              <label className="task-label">
                <span className="task-text">{care.text}</span>
                <input
                  type="checkbox"
                  value={care.text}
                  checked={serviceOptions.includes(care.text)}
                  onChange={() => toggleCareSelection(care.text)}
                  className="task-checkbox"
                />
                <span className="custom-checkbox"></span>
              </label>
            </div>
          ))}
        </div>
        <div className="input-group">
          <label htmlFor="yearsOfExperience">Years of Experience:</label>
          <input
            type="number"
            id="yearsOfExperience"
            value={yearsOfExperience}
            onChange={(e) => setYearsOfExperience(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Minimum Pay Rate:</label>
          <input
            type="number"
            id="payrate"
            value={payrate}
            onChange={(e) => setPayRate(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label htmlFor="yearsOfExperience">Preferred Area Zip Code</label>
          <input
            type="number"
            id="preferredZipCode"
            value={preferredZipCode}
            onChange={(e) => setPreferredZipCode(e.target.value)}
            className="input-field"
          />
        </div>
        <button className="care-next" onClick={handleSubmit}>
          Next
        </button>
      </form>
    </div>
  );
};

export default CleanerExperience;
