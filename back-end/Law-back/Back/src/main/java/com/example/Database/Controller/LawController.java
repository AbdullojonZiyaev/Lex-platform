package com.example.Database.Controller;


import com.example.Database.Models.Answer;
import com.example.Database.Models.Question;
import com.example.Database.Service.LawService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LawController {
    private LawService service;

    @PostMapping("/questions")
    public ResponseEntity<Question> addQuestion(@RequestParam Long startupId, @RequestBody String content) {
        return ResponseEntity.ok(service.addQuestion(startupId, content));
    }

    @PostMapping("/answers")
    public ResponseEntity<Answer> addAnswer(@RequestParam Long questionId,
                                            @RequestParam Long lawyerId,
                                            @RequestBody String content) {
        return ResponseEntity.ok(service.addAnswer(questionId, lawyerId, content));
    }

    @GetMapping("/questions/{id}/answers")
    public ResponseEntity<List<Answer>> getAnswers(@PathVariable Long id) {
        return ResponseEntity.ok(service.getAnswersForQuestion(id));
    }
}
