import React, { useState } from 'react';

function TodoForm({ onAdd }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Enter task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
        style={{ padding: '8px', width: '250px', marginRight: '10px' }}
      />
      <button type="submit" style={{ padding: '8px 12px' }}>Add</button>
    </form>
  );
}

export default TodoForm;
