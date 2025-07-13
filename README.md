# Student Management System

A simple CRUD web application for managing student records, built with Spring Boot (backend) and React (frontend).

## Features

* Create, Read, Update, Delete student profiles
* Pagination and sorting support
* Server-side validation using Jakarta Bean Validation

## Tech Stack

**Backend:** Java 17, Spring Boot, Spring Data JPA, MySQL, Maven, Lombok

**Frontend:** React, Axios, React Router, Tailwind CSS, npm

## Quick Start Guide

### 1. Database Setup

1. Create a MySQL database named `student`:

   ```sql
   CREATE DATABASE student;
   ```
2. In `backend/src/main/resources/application.properties`, set:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/student
   spring.datasource.username=<YOUR_DB_USERNAME>
   spring.datasource.password=<YOUR_DB_PASSWORD>
   spring.jpa.hibernate.ddl-auto=update
   ```

### 2. Backend

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

Runs on `http://localhost:8080`.

### 3. Frontend

```bash
cd frontend
npm install
npm start
```

Runs on `http://localhost:3000`.

## API Endpoints

Base URL: `http://localhost:8080/api/students`

| Method | Endpoint | Description                      |
| ------ | -------- | -------------------------------- |
| POST   | `/`      | Create a new student             |
| GET    | `/`      | List students (page, size, sort) |
| GET    | `/{id}`  | Get student by ID                |
| PUT    | `/{id}`  | Update student                   |
| DELETE | `/{id}`  | Delete student                   |

## Project Structure

```
backend/    # Spring Boot application
frontend/   # React app
```
