package com.example.Database.Models;

import jakarta.persistence.*;

@Entity
@Table(name = "Lawyers")
public class Lawyer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @Column(name = "Specialization", length = 100)
    private String specialization;

    @Column(name = "Experience_Years")
    private int experienceYears;

    // Getters and Setters
    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public User getUser() { return user; }

    public void setUser(User user) { this.user = user; }

    public String getSpecialization() { return specialization; }

    public void setSpecialization(String specialization) { this.specialization = specialization; }

    public int getExperienceYears() { return experienceYears; }

    public void setExperienceYears(int experienceYears) { this.experienceYears = experienceYears; }

    @Override
    public String toString() {
        return "Lawyer{" +
                "id=" + id +
                ", specialization='" + specialization + '\'' +
                ", experienceYears=" + experienceYears +
                ", user=" + (user != null ? user.getId() : null) +
                '}';
    }
}
