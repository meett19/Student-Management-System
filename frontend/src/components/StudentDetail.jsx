import React, { useEffect, useState } from 'react';
import { getStudent } from '../services/api';
import { useParams, Link } from 'react-router-dom';

const StudentDetail = () => {
  const [student, setStudent] = useState(null);
  const { id } = useParams();

  useEffect(() => { getStudent(id).then(res => setStudent(res.data)); }, [id]);
  if (!student) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="max-w-md mx-auto bg-white shadow p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{student.firstName} {student.lastName}</h2>
      <p className="mb-2"><span className="font-semibold">Email:</span> {student.email}</p>
      <p className="mb-4"><span className="font-semibold">Date of Birth:</span> {student.dateOfBirth}</p>
      <Link to="/" className="text-blue-500 hover:underline">Back to List</Link>
    </div>
  );
};

export default StudentDetail;