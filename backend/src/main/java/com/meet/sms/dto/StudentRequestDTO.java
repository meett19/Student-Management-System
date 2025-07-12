package com.meet.sms.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class StudentRequestDTO {
    @NotBlank private String firstName;
    @NotBlank private String lastName;
    @Email private String email;
    private LocalDate dateOfBirth;

}
