package com.example.demo.services;

import com.example.demo.models.Answer;
import com.example.demo.models.Lawyer;
import com.example.demo.models.Question;
import com.example.demo.models.Startup;
import com.example.demo.repository.AnswerRepository;
import com.example.demo.repository.LawyerRepository;
import com.example.demo.repository.QuestionRepository;
import com.example.demo.repository.StartupRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LawServices {
    private StartupRepository startupRepo;
    private LawyerRepository lawyerRepo;
    private QuestionRepository questionRepo;
    private AnswerRepository answerRepo;

    public Question addQuestion(Long startupId, String content) {
        Startup startup = startupRepo.findById(startupId)
                .orElseThrow(() -> new RuntimeException("Startup not found"));
        Question question = new Question();
        question.setContent(content);
        question.setStartup(startup);
        return questionRepo.save(question);
    }

    public Answer addAnswer(Long questionId, Long lawyerId, String content) {
        Question question = questionRepo.findById(questionId)
                .orElseThrow(() -> new RuntimeException("Question not found"));
        Lawyer lawyer = lawyerRepo.findById(lawyerId)
                .orElseThrow(() -> new RuntimeException("Lawyer not found"));
        Answer answer = new Answer();
        answer.setContent(content);
        answer.setQuestion(question);
        answer.setLawyer(lawyer);
        return answerRepo.save(answer);
    }

    public List<Answer> getAnswersForQuestion(Long questionId) {
        return answerRepo.findAll().stream()
                .filter(a -> a.getQuestion().getId().equals(questionId))
                .collect(Collectors.toList());
    }
}
