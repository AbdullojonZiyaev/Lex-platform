package com.example.Database.Service;

import com.example.Database.Models.Answer;
import com.example.Database.Models.Lawyer;
import com.example.Database.Models.Question;
import com.example.Database.Models.Startup;
import com.example.Database.Repository.AnswerRepo;
import com.example.Database.Repository.LawyerRepo;
import com.example.Database.Repository.QuestionRepo;
import com.example.Database.Repository.StartupRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LawService {
    private StartupRepo startupRepo;
    private LawyerRepo lawyerRepo;
    private QuestionRepo questionRepo;
    private AnswerRepo answerRepo;

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
