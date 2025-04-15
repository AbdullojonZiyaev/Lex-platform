package com.example.Database.Models;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "Question_Tags", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"question_id", "tag_id"})
})

public class QuestionTag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "question_id", referencedColumnName = "id")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "tag_id", referencedColumnName = "id")
    private Tag tag;

    // Getters and Setters
    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public Question getQuestion() { return question; }

    public void setQuestion(Question question) { this.question = question; }

    public Tag getTag() { return tag; }

    public void setTag(Tag tag) { this.tag = tag; }

    @Override
    public String toString() {
        return "QuestionTag{" +
                "id=" + id +
                ", question=" + (question != null ? question.getId() : null) +
                ", tag=" + (tag != null ? tag.getId() : null) +
                '}';
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof QuestionTag)) return false;
        QuestionTag that = (QuestionTag) o;
        return question.equals(that.question) && tag.equals(that.tag);
    }

    @Override
    public int hashCode() {
        return Objects.hash(question, tag);
    }

}
