import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../api/user";
import { setUserData } from "../../redux/reducers/customer/user";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("qa@gmail.com");
  const [password, setPassword] = useState<string>("flower1234");
  const [formError, setFormError] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        localStorage.setItem("jwtToken", response.token);

        dispatch(setUserData(response));
        navigate("/dashboard");
      } else {
      }
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
      <div className="wrapper">
        <div className="login-creds">
          {/* Display test login credentials */}
          <div className="test-credentials">
            <p className="small-text">Cleaner Test Credentials:</p>
            <p>Email: test223@gmail.com</p>
            <p>Password: flower1234</p>
          </div>
          <div className="test-credentials">
            <p className="small-text">Customer Test Credentials:</p>
            <p>Email: qa@gmail.com</p>
            <p>Password: flower1234</p>
          </div>
        </div>
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
    </div>
  );
};

export default Login;
