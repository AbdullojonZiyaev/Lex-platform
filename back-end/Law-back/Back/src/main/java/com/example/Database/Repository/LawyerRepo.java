package com.example.Database.Repository;

import com.example.Database.Models.Lawyer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LawyerRepo extends JpaRepository<Lawyer, Long> {
}
