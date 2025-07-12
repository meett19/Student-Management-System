import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetail from './components/StudentDetail';

function App() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <nav className="flex justify-between items-center mb-6">
        <Link to="/" className="text-xl font-semibold text-blue-600 hover:text-blue-800">Home</Link>
        <Link to="/add" className="text-xl font-semibold text-blue-600 hover:text-blue-800">Add Student</Link>
      </nav>
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/add" element={<StudentForm />} />
        <Route path="/edit/:id" element={<StudentForm />} />
        <Route path="/view/:id" element={<StudentDetail />} />
      </Routes>
    </div>
  );
}

export default App;