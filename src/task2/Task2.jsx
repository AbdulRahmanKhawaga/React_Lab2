import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Task2() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    if (!text.trim()) return;
    const newTask = { id: Date.now(), text, done: false };
    setTasks([newTask, ...tasks]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleDone = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>To Do App</h2>
      <TodoForm onAdd={addTask} />
      <TodoList tasks={tasks} onDelete={deleteTask} onToggle={toggleDone} />
    </div>
  );
}

export default Task2;
