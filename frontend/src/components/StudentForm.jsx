import React, { useEffect, useState } from 'react';
import { createStudent, getStudent, updateStudent } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';

const StudentForm = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', dateOfBirth: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) getStudent(id).then(res => setForm(res.data));
  }, [id]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    (id ? updateStudent(id, form) : createStudent(form)).then(() => navigate('/'));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow p-6 rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-4">{id ? 'Edit' : 'Add'} Student</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">First Name</label>
        <input
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Last Name</label>
        <input
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Email</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-1">Date of Birth</label>
        <input
          name="dateOfBirth"
          type="date"
          value={form.dateOfBirth}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        {id ? 'Update' : 'Create'}
      </button>
    </form>
  );
};

export default StudentForm;
