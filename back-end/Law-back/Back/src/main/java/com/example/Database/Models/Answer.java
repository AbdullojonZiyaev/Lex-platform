package com.example.Database.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Answer {
    @Id
    //@GenerateValue
    private Long id;
    private String content;

    //@ManyToOne
    //@JoinColumn whatever
    private Lawyer lawyer;
    private Question question;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public Lawyer getLawyer() {
        return lawyer;
    }

    public void setLawyer(Lawyer lawyer) {
        this.lawyer = lawyer;
    }
}
