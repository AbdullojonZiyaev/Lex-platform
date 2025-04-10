package com.example.demo.repository;

import com.example.demo.models.Answer;
import com.example.demo.models.Startup;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StartupRepository extends JpaRepository<Startup, Long> {

}
