import React from 'react';

function TodoItem({ task, onDelete, onToggle }) {
  return (
    <li
      style={{
        background: '#f0f0f0',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '6px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <span
        style={{
          textDecoration: task.done ? 'line-through' : 'none',
          fontWeight: task.done ? 'normal' : 'bold',
          fontSize: '16px'
        }}
      >
        {task.text}
      </span>
      <div>
        <button
          onClick={() => onToggle(task.id)}
          style={{ marginRight: '10px', padding: '4px 8px' }}
        >
          {task.done ? 'Undo' : 'Done'}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          style={{ padding: '4px 8px', backgroundColor: 'red', color: 'white' }}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
