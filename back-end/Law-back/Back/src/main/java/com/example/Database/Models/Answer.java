package com.example.Database.Models;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "Answers")
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "lawyer_id", referencedColumnName = "id")
    private Lawyer lawyer;

    @ManyToOne
    @JoinColumn(name = "question_id", referencedColumnName = "id")
    private Question question;

    @Column(name = "Content", nullable = false, length = 1000)
    private String content;

    @Column(name = "Created_At", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;

    // Getters and Setters
    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public Lawyer getLawyer() { return lawyer; }

    public void setLawyer(Lawyer lawyer) { this.lawyer = lawyer; }

    public Question getQuestion() { return question; }

    public void setQuestion(Question question) { this.question = question; }

    public String getContent() { return content; }

    public void setContent(String content) { this.content = content; }

    public Date getCreatedAt() { return createdAt; }

    public void setCreatedAt(Date createdAt) { this.createdAt = createdAt; }

    @Override
    public String toString() {
        return "Answer{" +
                "id=" + id +
                ", content='" + content + '\'' +
                ", lawyer=" + (lawyer != null ? lawyer.getId() : null) +
                ", question=" + (question != null ? question.getId() : null) +
                ", createdAt=" + createdAt +
                '}';
    }
}
