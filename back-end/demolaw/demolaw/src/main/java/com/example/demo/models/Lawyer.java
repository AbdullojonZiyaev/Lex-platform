package com.example.demo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Lawyer {
    @Id
    //@GenerateValue?? почитать, может ввести
    private Long id;
    private String name;
    private String somethingelse;
    private String mojetemail;

    //чето чат говорит сунуть @OneToMany, потом почитать че такое и как работает
    private List<Answer> answers = new ArrayList<>();

    public Long getLawyerId() {
        return id;
    }

    public void setLawyerId(Long id) {
        this.id = id;
    }

    public String getLawyerName() {
        return name;
    }

    public void setLawyerName(String name) {
        this.name = name;
    }

    public List<Answer> getAnswers() {
        return answers;
    }

    public void setAnswers(List<Answer> answers) {
        this.answers = answers;
    }
}
