import axios from 'axios';

const API_URL = 'http://localhost:8080/api/students';

export const getStudents = (page = 0, size = 10) =>
  axios.get(`${API_URL}?page=${page}&size=${size}`);

export const getStudent = id =>
  axios.get(`${API_URL}/${id}`);

export const createStudent = data =>
  axios.post(API_URL, data);

export const updateStudent = (id, data) =>
  axios.put(`${API_URL}/${id}`, data);

export const deleteStudent = id =>
  axios.delete(`${API_URL}/${id}`);