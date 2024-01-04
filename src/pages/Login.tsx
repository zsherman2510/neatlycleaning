import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/user";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("qa@gmail.com");
  const [password, setPassword] = useState<string>("flower1234");
  const [formError, setFormError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!email || !password) {
      setFormError("Please enter both your email and password.");
      return;
    }

    // Handle the login logic here
    try {
      const response = await loginUser(email, password);

      console.log(response);

      if (response && response.token) {
      }
      // navigate("/findCare");
      // Make an API call to authenticate the user
      // Replace this with your actual authentication logic
      // const response = await login(email, password);
      // Handle the response from the API as needed
      // console.log("User authenticated:", response);
      // Redirect the user to the next step or page
      // navigate("/dashboard");
    } catch (error) {
      // Handle authentication errors
      console.error("Authentication error:", error);

      // Optionally, you can set an error message for display
      setFormError("Authentication failed. Please check your credentials.");
    }
    setFormError("");
  };

  return (
    <div className="container">
      <div className="care-question">Welcome back, please log in</div>
      <div className="creds-form">
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
          Log in
        </button>
      </div>
    </div>
  );
};

export default Login;
