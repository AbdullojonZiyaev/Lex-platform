package com.example.Database.Service;

import com.example.Database.Models.Answer;
import com.example.Database.Repository.AnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {

    @Autowired
    private AnswerRepository answerRepository;

    public Answer getAnswerById(Long id) {
        Optional<Answer> answer = answerRepository.findById(id);
        return answer.orElse(null);
    }

    public List<Answer> getAllAnswers() {
        return answerRepository.findAll();
    }

    @Transactional
    public Answer createAnswer(Answer answer) {
        return answerRepository.save(answer);
    }

    @Transactional
    public Answer updateAnswer(Long id, Answer updatedAnswer) {
        Optional<Answer> existingAnswerOptional = answerRepository.findById(id);
        if (existingAnswerOptional.isPresent()) {
            Answer existingAnswer = existingAnswerOptional.get();
            existingAnswer.setContent(updatedAnswer.getContent());
            existingAnswer.setCreatedAt(updatedAnswer.getCreatedAt());
            return answerRepository.save(existingAnswer);
        }
        return null;
    }

    @Transactional
    public void deleteAnswer(Long id) {
        answerRepository.deleteById(id);
    }
}
