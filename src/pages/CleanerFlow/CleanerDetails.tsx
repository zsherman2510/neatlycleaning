import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
//import { addCleanerInfo } from "../redux/actions";
import { updateCleanerPersonalDetails } from "../../redux/reducers/cleaner/createCleanerReducer";

const CleanerDetails = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    // Validate and submit the basic information
    if (!firstName || !lastName || !phone) {
      // Handle validation errors
      return;
    }

    // Dispatch action to store basic information in Redux
    const basicInfo = { firstName, lastName, phone };
    dispatch(updateCleanerPersonalDetails(basicInfo));

    // Redirect to the next step
    navigate("/experience");
  };

  return (
    <div className="container">
      <div className="care-question">Enter your personal information</div>
      <form>
        <div className="input-group">
          <label htmlFor="fullName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label htmlFor="fullName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            maxLength={10}
            onChange={(e) => setPhone(e.target.value)}
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

export default CleanerDetails;
