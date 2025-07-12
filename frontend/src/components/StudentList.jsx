import React, { useEffect, useState } from 'react';
import { getStudents, deleteStudent } from '../services/api';
import { Link } from 'react-router-dom';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(0);

  const fetchStudents = () => {
    getStudents(page).then(res => setStudents(res.data.content));
  };

  useEffect(fetchStudents, [page]);

  const handleDelete = id => {
    if (window.confirm('Delete this student?')) {
      deleteStudent(id).then(fetchStudents);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Students</h2>
      <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">
                <Link to={`/view/${s.id}`} className="text-blue-600 hover:underline">
                  {s.firstName} {s.lastName}
                </Link>
              </td>
              <td className="py-2 px-4 text-center space-x-2">
                <Link
                  to={`/edit/${s.id}`}
                  className="inline-block bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(s.id)}
                  className="inline-block bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <button
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
          disabled={page === 0}
          onClick={() => setPage(p => p - 1)}
        >
          Prev
        </button>
        <button
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
          onClick={() => setPage(p => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StudentList;