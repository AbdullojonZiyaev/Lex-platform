package com.example.demo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Startup {
    @Id
    //@GenerateValue??
    private Long id;
    private String name;
    private String something;

    //@OneToMany??
    private List<Question> questions = new ArrayList<>();

    public Long getStartupId() {
        return id;
    }

    public void setStartupId(Long id) {
        this.id = id;
    }

    public String getStartupName() {
        return name;
    }

    public void setStartupName(String name) {
        this.name = name;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }
}
