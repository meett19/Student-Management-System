package com.meet.sms.service;


import com.meet.sms.dto.StudentRequestDTO;
import com.meet.sms.dto.StudentResponseDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface StudentService {
    StudentResponseDTO createStudent(StudentRequestDTO dto);
    StudentResponseDTO getStudentById(Long id);
    Page<StudentResponseDTO> getAllStudents(Pageable pageable);
    StudentResponseDTO updateStudent(Long id, StudentRequestDTO dto);
    void deleteStudent(Long id);

//    // For downloading the document
//    byte[] getStudentDocument(Long id);
//    String getStudentDocumentName(Long id);
//    String getStudentDocumentType(Long id);
}
