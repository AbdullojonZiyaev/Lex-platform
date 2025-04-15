package com.example.Database.Service;

import com.example.Database.Models.Question;
import com.example.Database.Repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    public Question getQuestionById(Long id) {
        Optional<Question> question = questionRepository.findById(id);
        return question.orElse(null);
    }

    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    public List<Question> getQuestionsByTitle(String title) {
        return questionRepository.findByTitleLike(title);
    }

    public List<Question> getQuestionsByCategory(Long categoryId) {
        return questionRepository.findByCategoryId(categoryId);
    }

    public List<Question> getQuestionsByStartup(Long startupId) {
        return questionRepository.findByStartupId(startupId);
    }

    @Transactional
    public Question createQuestion(Question question) {
        return questionRepository.save(question);
    }

    @Transactional
    public Question updateQuestion(Long id, Question updatedQuestion) {
        Optional<Question> existingQuestionOptional = questionRepository.findById(id);
        if (existingQuestionOptional.isPresent()) {
            Question existingQuestion = existingQuestionOptional.get();

            // Update the basic fields
            existingQuestion.setTitle(updatedQuestion.getTitle());
            existingQuestion.setDescription(updatedQuestion.getDescription());

            // Update the tags if provided
            if (updatedQuestion.getQuestionTags() != null && !updatedQuestion.getQuestionTags().isEmpty()) {
                // Clear existing tags and add new ones
                existingQuestion.setQuestionTags(updatedQuestion.getQuestionTags());
            }

            // Save the updated question
            return questionRepository.save(existingQuestion);
        }
        return null;
    }


    @Transactional
    public void deleteQuestion(Long id) {
        questionRepository.deleteById(id);
    }
}
