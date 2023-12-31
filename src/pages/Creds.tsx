import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  updateCustomerPersonalDetails,
  selectCustomerPersonalDetails,
  selectCustomer,
} from "../redux/reducers/createCustomerReducer";
import { registerCleaner } from "../api/user";
type Props = {};

const Creds: React.FC = ({}: Props) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [formError, setFormError] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector(selectCustomer);
  console.log(data, "data");
  const handleSubmit = async () => {
    if (!firstName || !lastName || !email || !phoneNumber) {
      setFormError("Please enter both your first and last name.");
      return;
    }
    // Handle the submission logic here
    const personalDetails = {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
    };
    // Reset form error on successful submission

    dispatch(updateCustomerPersonalDetails(personalDetails));

    try {
      // Make an API call to create the user account
      const response = await registerCleaner(personalDetails, data);

      // Handle the response from the API as needed
      console.log("User account created:", response);

      // Redirect the user to the next step or page
      // navigate("/findCare");
    } catch (error) {
      // Handle API call errors
      console.error("Error creating user account:", error);

      // Optionally, you can set an error message for display
      setFormError("Error creating user account. Please try again later.");
    }
    setFormError("");

    // navigate("/findCare");
  };

  return (
    <div className="container">
      <div className="care-question">
        Almost done, add a few details about yourself
      </div>
      <div className="creds-form">
        <div className="input-group">
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="input-group">
          <input
            type="tel"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="care-question">Create Login Credentials</div>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </div>

        {formError && <div className="form-error">{formError}</div>}
        <button className="care-next" onClick={handleSubmit}>
          Join now
        </button>
      </div>
    </div>
  );
};

export default Creds;
