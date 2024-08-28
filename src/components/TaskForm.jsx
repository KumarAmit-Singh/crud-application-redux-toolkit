import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../features/tasks/taskSlices";

const TaskForm = ({ taskToEdit, onEditComplete }) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
    } else {
      setTitle("");
    }
  }, [taskToEdit]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === "") {
      setError("Task title cannot be empty");
      return;
    }

    if (taskToEdit) {
      dispatch(updateTask({ id: taskToEdit.id, title }));
      onEditComplete();
    } else {
      dispatch(addTask({ id: Date.now(), title }));
      setTitle("");
    }
  };

  const inputchange = (event) => {
    setTitle(event.target.value);

    if (error) {
      setError("");
    }
  };

  return (
    <form className="row" onSubmit={handleSubmit}>
      <div className="d-flex">
        <div className="col">
          <input
            className="form-control"
            type="text"
            value={title}
            onChange={inputchange}
            placeholder="Enter Todo"
          />
        </div>
        <div className="col1">
          <button type="submit" className="btn btn-primary mb-3">
            AddTodo
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
