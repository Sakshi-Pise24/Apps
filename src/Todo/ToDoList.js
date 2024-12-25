import React, { useState } from 'react';
import './ToDoList.css';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  // Add or Update Task
  const handleAddTask = () => {
    if (newTask.trim() === '') return;

    if (editIndex !== null) {
      // Edit Task
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = newTask;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      // Add Task
      setTasks([...tasks, newTask]);
    }

    setNewTask('');
  };

  // Edit Task
  const handleEditTask = (index) => {
    setNewTask(tasks[index]);
    setEditIndex(index);
  };

  // Delete Task
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <div className="input-section">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={handleAddTask}>
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <div>
              <button onClick={() => handleEditTask(index)}>Edit</button>
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
