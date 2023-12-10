import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addJobTasks } from '../redux/reducers/createCustomerReducer';

type TasksByCareType = {
  [key: string]: string[];
};

const Tasks: React.FC = () => {
    // Maintain state for selected tasks
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);
  const [suppliesRequired, setSuppliesRequired] = useState<string>(''); // State for Supplies Required
  const [equipmentRequired, setEquipmentRequired] = useState<string>(''); // State for Equipment Required
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchParams = new URLSearchParams(location.search);
  const careType = searchParams.get('careType');

  const tasksByCareType: TasksByCareType = {
    child: [
      'Feed the child',
      'Play with the child',
      'Help with homework',
    ],
    senior: [
      'Assist with daily medication',
      'Provide companionship',
      'Prepare meals',
    ],
    house: [
      'Clean and organize rooms',
      'Do laundry and ironing',
      'Dust and vacuum',
    ],
    pet: [
      'Feed and water the pet',
      'Take the pet for a walk',
      'Clean the pet living area',
    ],
    tutor: [
      'Teach subjects like math',
      'Provide study guidance',
      'Help with test preparation',
    ],
  };
  const defaultCareType = 'house'; // Set your default care type here
  const availableTasks = careType && tasksByCareType[careType]
    ? tasksByCareType[careType]
    : tasksByCareType[defaultCareType];

  // Handle task selection
  const toggleTaskSelection = (task: string) => {
    if (selectedTasks.includes(task)) {
      // Task is already selected, so deselect it
      setSelectedTasks(selectedTasks.filter((selectedTask) => selectedTask !== task));
    } else {
      // Task is not selected, so select it
      setSelectedTasks([...selectedTasks, task]);
    }
  };

  const handleNext = () => {
    if (!selectedTasks || selectedTasks.length === 0) {
      alert('Please select any tasks.');
      return;
    }

    const jobTasks = {
      selectedTasks,
      suppliesRequired,
      equipmentRequired,
    };
    dispatch(addJobTasks(jobTasks));
    navigate(`/properties`);
  }

  return (
    <div className="container">
      <div className="care-question">
        What tasks do you expect that will need to completed for care type: {careType || defaultCareType}
      </div>
      <div className="task-list">
        {availableTasks.map((task, index) => (
          <div key={index} className="task-item">
            <label className="task-label">
              <span className="task-text">{task}</span>
              <input
                type="checkbox"
                value={task}
                checked={selectedTasks.includes(task)}
                onChange={() => toggleTaskSelection(task)}
                className="task-checkbox"
              />
              <span className="custom-checkbox"></span>
            </label>
          </div>
        ))}
      </div>
      <div className="supplies-required">
        <label>Supplies Required:</label>
        <label>
          <input
            type="radio"
            value="Yes"
            checked={suppliesRequired === 'Yes'}
            onChange={() => setSuppliesRequired('Yes')}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="No"
            checked={suppliesRequired === 'No'}
            onChange={() => setSuppliesRequired('No')}
          />
          No
        </label>
      </div>

      {/* Radio buttons for Equipment Required */}
      <div className="equipment-required">
        <label>Equipment Required:</label>
        <label>
          <input
            type="radio"
            value="Yes"
            checked={equipmentRequired === 'Yes'}
            onChange={() => setEquipmentRequired('Yes')}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="No"
            checked={equipmentRequired === 'No'}
            onChange={() => setEquipmentRequired('No')}
          />
          No
        </label>
      </div>
      <button className="care-next" onClick={handleNext}>Next</button>
    </div>
  );
  
  
};

export default Tasks;