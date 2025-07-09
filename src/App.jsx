import './styles/App.styles.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Task1 from './task1/Task1';
import Task2 from './task2/Task2';

function App() {
  return (
    <div className="container">
      <nav className="navigation">
        <Link to="/task1" className="nav-link">Task 1</Link>
        <Link to="/task2" className="nav-link">Task 2</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/task1" replace />} />
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="*" element={<Navigate to="/task1" replace />} />
      </Routes>
    </div>
  );
}

export default App;
