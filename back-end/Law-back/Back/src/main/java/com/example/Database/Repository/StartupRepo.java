package com.example.Database.Repository;


import com.example.Database.Models.Startup;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StartupRepo extends JpaRepository<Startup, Long> {

}
