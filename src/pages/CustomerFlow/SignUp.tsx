import { useNavigate } from "react-router-dom"
type Props = {}



function SignUp({}: Props) {

  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="subtitle">Let’s get started. Choose an option.</div>
      <div className="options">
        <div className="option-card">
          {/* <img src="path_to_your_caregiver_image.jpg" alt="I need a caregiver" /> */}
          <div className="option-title">I need a caregiver</div>
          <div className="option-description">Start your free search for care in your area.</div>
          <button className="option-btn" onClick={() => navigate('/careType')}>Find care</button>
        </div>
        <div className="option-card">
          {/* <img src="path_to_your_care_job_image.jpg" alt="I want a care job" /> */}
          <div className="option-title">I want a care job</div>
          <div className="option-description">Create a profile and search for jobs.</div>
          <button className="option-btn">Find jobs</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp