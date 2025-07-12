package com.meet.sms.service;


import com.meet.sms.ResourceNotFoundException;
import com.meet.sms.dto.StudentRequestDTO;
import com.meet.sms.dto.StudentResponseDTO;
import com.meet.sms.entity.Student;
import com.meet.sms.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

@Service

public class StudentServiceImpl implements StudentService {

    private final StudentRepository repo;

    @Autowired
    public StudentServiceImpl(StudentRepository repo) {
        this.repo = repo;
    }

    @Override
    public StudentResponseDTO createStudent(StudentRequestDTO dto) {
        Student s = new Student();
        s.setFirstName(dto.getFirstName());
        s.setLastName(dto.getLastName());
        s.setEmail(dto.getEmail());
        s.setDateOfBirth(dto.getDateOfBirth());
        return map(repo.save(s));
    }

    @Override
    public StudentResponseDTO getStudentById(Long id) {
        Student s = repo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student", "id", id));
        return map(s);
    }

    @Override
    public Page<StudentResponseDTO> getAllStudents(Pageable pageable) {
        return repo.findAll(pageable).map(this::map);
    }

    @Override
    public StudentResponseDTO updateStudent(Long id, StudentRequestDTO dto) {
        Student s = repo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student", "id", id));
        s.setFirstName(dto.getFirstName());
        s.setLastName(dto.getLastName());
        s.setEmail(dto.getEmail());
        s.setDateOfBirth(dto.getDateOfBirth());
        return map(repo.save(s));
    }

    @Override
    public void deleteStudent(Long id) {
        Student s = repo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student", "id", id));
        repo.delete(s);
    }

    private StudentResponseDTO map(Student s) {
        StudentResponseDTO dto = new StudentResponseDTO();
        dto.setId(s.getId());
        dto.setFirstName(s.getFirstName());
        dto.setLastName(s.getLastName());
        dto.setEmail(s.getEmail());
        dto.setDateOfBirth(s.getDateOfBirth());
        return dto;
    }
}
