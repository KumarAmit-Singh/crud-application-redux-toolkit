import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleEdit = (task) => {
    setTaskToEdit(task);
  };

  const handleEditComplete = () => {
    setTaskToEdit(null);
  };

  return (
    <div>
      <h1 className='heading'>CRUD Application with Redux Toolkit</h1>
      <TaskForm taskToEdit={taskToEdit} onEditComplete={handleEditComplete} />
      <TaskList onEdit={handleEdit} />
    </div>
  );
};

export default App;
