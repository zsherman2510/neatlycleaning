import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CareType: React.FC = () => {
  const [selected, setSelected] = useState<string>('');
  const navigate = useNavigate();
  const handleSelection = (key: any) => {
    setSelected(key);
  }

  const handleNext = () => {
    navigate('/frequency')
  }
  const options = [
    { key: 'child', text: 'Child care' },
    { key: 'senior', text: 'Senior care' },
    { key: 'house', text: 'Housekeeping' },
    { key: 'pet', text: 'Pet care' },
    { key: 'tutor', text: 'Tutoring' }
  ];

  return (
    <>
      <div className="care-question">
        What kind of care do you need?
      </div>
      <div className="care-options">
      {options.map((option) => (
          <button 
            key={option.key}
            className={`${'care-option'} ${selected === option.key ? 'selected' : ''}`}
            onClick={() => handleSelection(option.key)}
          >
            <i className={`icon-${option.key}`}></i> {option.text}
          </button>
        ))}
      </div>

      <button className="care-next">Next</button>
    </>
  )
}

export default CareType