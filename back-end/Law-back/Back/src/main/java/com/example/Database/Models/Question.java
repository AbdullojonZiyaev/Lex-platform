package com.example.Database.Models;

import jakarta.persistence.*;

import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "Questions")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "startup_id", referencedColumnName = "id")
    private Startup startup;

    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private Category category;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<QuestionTag> questionTags;

    @Column(name = "Title", nullable = false, length = 255)
    private String title;

    @Column(name = "Description", length = 1000)
    private String description;

    @Column(name = "Created_At", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;

    // Getters and Setters
    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public Startup getStartup() { return startup; }

    public void setStartup(Startup startup) { this.startup = startup; }

    public Category getCategory() { return category; }

    public void setCategory(Category category) { this.category = category; }

    public Set<QuestionTag> getQuestionTags() { return questionTags; }

    public void setQuestionTags(Set<QuestionTag> questionTags) { this.questionTags = questionTags; }

    public String getTitle() { return title; }

    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }

    public void setDescription(String description) { this.description = description; }

    public Date getCreatedAt() { return createdAt; }

    public void setCreatedAt(Date createdAt) { this.createdAt = createdAt; }

    @Override
    public String toString() {
        return "Question{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", startup=" + (startup != null ? startup.getId() : null) +
                ", category=" + (category != null ? category.getId() : null) +
                ", createdAt=" + createdAt +
                '}';
    }
}
