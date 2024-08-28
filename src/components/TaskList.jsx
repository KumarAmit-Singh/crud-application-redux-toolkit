import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlices';

const TaskList = ({ onEdit }) => {
  const tasks = useSelector((state) => state.tasks.tasks);
  console.log(tasks)
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <ul className='list-group'>
      {tasks.map((task) => (
        <li key={task.id} className='list-group-item d-flex justify-content-between'>
          <div>{task.title}</div>
          <div>
            <button onClick={() => onEdit(task)} className='btn btn-warning'>Edit</button>
            <button onClick={() => handleDelete(task.id)} className='btn btn-danger ms-2'>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
