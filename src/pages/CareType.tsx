import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectCareType } from '../redux/reducers/customerReducer';

const CareType: React.FC = () => {
  const [selected, setSelected] = useState<string>('');
  const [frequency, setFrequency] = useState<string>('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSelection = (key: any) => {
    setSelected(key);
  }

  const handleFrequencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFrequency(event.target.value);
  }

  const handleNext = () => {
    if (!selected) {
      alert('Please select a care type.');
      return;
    }

    dispatch(selectCareType(selected, frequency));
    navigate('/frequency')
  }
  const options = [
    { key: 'child', text: 'Child care' },
    { key: 'senior', text: 'Senior care' },
    { key: 'house', text: 'Housekeeping' },
    { key: 'pet', text: 'Pet care' },
    { key: 'tutor', text: 'Tutoring' }
  ];

  const frequencies = ["one time", "every week", "every 2 weeks", "monthly"];

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

      <div className="frequency-selection">
        <h2>How often do you need care?</h2>
        {frequencies.map(freq => (
          <label key={freq}>
            <input
              type="radio"
              name="frequency"
              value={freq}
              checked={frequency === freq}
              onChange={handleFrequencyChange}
            />
            {freq}
          </label>
        ))}
      </div>

      <button className="care-next" onClick={handleNext}>Next</button>
    </>
  )
}

export default CareType