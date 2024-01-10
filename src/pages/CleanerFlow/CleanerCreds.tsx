import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCleaner } from "../../redux/reducers/cleanerReducer";
import { registerCleaner } from "../../api/user";
type Props = {};

const CleanerCreds: React.FC = ({}: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [formError, setFormError] = useState<string>("");
  const navigate = useNavigate();
  const data = useSelector(selectCleaner);
  const handleSubmit = async () => {
    if (!email || !password) {
      setFormError("Please enter both your first and last name.");
      return;
    }

    const formData = new FormData();

    // Append email and password to the formData
    formData.append("email", email);
    formData.append("password", password);

    // Loop through the 'data' object and its properties
    for (const sectionKey in data) {
      if (data.hasOwnProperty(sectionKey)) {
        const section = data[sectionKey];

        // Loop through the properties of the current section
        for (const propertyKey in section) {
          if (section.hasOwnProperty(propertyKey)) {
            const propertyValue = section[propertyKey];

            // Append the property value to the formData
            formData.append(`${propertyKey}`, propertyValue);
          }
        }
      }
    }

    try {
      // Make an API call to create the user account
      const response = await registerCleaner(formData);

      // Handle the response from the API as needed
      console.log("User account created:", response);

      // Redirect the user to the next step or page
      navigate("/login");
    } catch (error) {
      // Handle API call errors
      console.error("Error creating user account:", error);

      // Optionally, you can set an error message for display
      setFormError("Error creating user account. Please try again later.");
    }
    setFormError("");

    navigate("/login");
  };

  return (
    <div className="container">
      <div className="care-question">
        Almost done, add a few details about yourself
      </div>
      <div className="creds-form">
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

export default CleanerCreds;
