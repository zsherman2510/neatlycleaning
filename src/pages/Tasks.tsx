import React, {useState} from 'react'
import { useLocation } from 'react-router-dom';


type TasksByCareType = {
  [key: string]: string[];
};

const Tasks: React.FC = () => {
    // Maintain state for selected tasks
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const careType = searchParams.get('careType');
  console.log(careType, 'selectedcaretype')

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

  return (
    <div className="tasks-container">
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
    </div>
  );
  
  
};

export default Tasks;