package com.example.Database.Controller;

import com.example.Database.Models.Answer;
import com.example.Database.Models.Lawyer;
import com.example.Database.Models.Question;
import com.example.Database.Repository.LawyerRepository;
import com.example.Database.Repository.QuestionRepository;
import com.example.Database.Repository.StartupRepository;
import com.example.Database.Service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/answers")
public class AnswerController {

    @Autowired
    private AnswerService answerService;
    @Autowired
    private LawyerRepository lawyerRepository;
    @Autowired
    private QuestionRepository questionRepository;
    // Get all answers
    @GetMapping
    public List<Answer> getAllAnswers() {
        return answerService.getAllAnswers();
    }

    // Get an answer by its ID
    @GetMapping("/{id}")
    public Optional<Answer> getAnswerById(@PathVariable Long id) {
        return answerService.getAnswerById(id);
    }

    // Get an answer by its ID
    @GetMapping("/lawyer/{id}")
    public List<Answer> getAnswerByLawyerId(@PathVariable Long id) {
        return answerService.getAnswerByLawyerId(id);
    }
    // Get an answer by its ID
    @GetMapping("/question/{id}")
    public List<Answer> getAnswerByQuestionId(@PathVariable Long id) {
        return answerService.getAnswerByQuestionId(id);
    }

    @PostMapping
    public ResponseEntity<Answer> addAnswer(@RequestBody Map<String, Object> payload) {
        try {
            Long lawyerId = Long.valueOf(payload.get("lawyerId").toString());
            Long questionId = Long.valueOf(payload.get("questionId").toString());
            String content = payload.get("content").toString();

            Optional<Lawyer> lawyerOpt = lawyerRepository.findById(lawyerId);
            Optional<Question> questionOpt = questionRepository.findById(questionId);

            if (lawyerOpt.isEmpty() || questionOpt.isEmpty()) {
                return ResponseEntity.badRequest().build();
            }

            Answer answer = new Answer();
            answer.setLawyer(lawyerOpt.get());
            answer.setQuestion(questionOpt.get());
            answer.setContent(content);
            answer.setCreatedAt(LocalDateTime.now());

            Answer savedAnswer = answerService.createAnswer(answer);
            return new ResponseEntity<>(savedAnswer, HttpStatus.CREATED);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


    // Update an existing answer
    @PutMapping("/{id}")
    public Answer updateAnswer(@PathVariable Long id, @RequestBody Answer answer) {
        return answerService.updateAnswer(id, answer);
    }

    // Delete an answer by its ID
    @DeleteMapping("/{id}")
    public void deleteAnswer(@PathVariable Long id) {
        answerService.deleteAnswer(id);
    }
}
