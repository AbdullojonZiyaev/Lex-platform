package com.example.Database.Models;

import com.example.Database.Models.Startup;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Question {
    @Id //айди вопросам тоже наверное нужно
    //@GenetateValue
    private Long id;
    private String content;

    //@ManyToOne
    //@JoinColumn(name='startup_id')
    private Startup startup;

    private List<Answer> answers = new ArrayList<>();

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

    public Startup getStartup() {
        return startup;
    }

    public void setStartup(Startup startup) {
        this.startup = startup;
    }

    public List<Answer> getAnswers() {
        return answers;
    }

    public void setAnswers(List<Answer> answers) {
        this.answers = answers;
    }
}
