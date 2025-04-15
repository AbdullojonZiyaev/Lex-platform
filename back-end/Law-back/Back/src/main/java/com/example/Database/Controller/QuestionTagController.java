package com.example.Database.Controller;

import com.example.Database.Models.QuestionTag;
import com.example.Database.Models.Question;
import com.example.Database.Service.QuestionTagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/questionTags")
public class QuestionTagController {

    @Autowired
    private QuestionTagService questionTagService;

    // Get all question tags
    @GetMapping
    public List<QuestionTag> getAllQuestionTags() {
        return questionTagService.getAllQuestionTags();
    }

    // Add a new question tag
    @PostMapping
    public QuestionTag addQuestionTag(@RequestBody QuestionTag questionTag) {
        return questionTagService.createQuestionTag(questionTag);
    }

    // Delete a question tag by its ID
    @DeleteMapping("/{id}")
    public void deleteQuestionTag(@PathVariable Long id) {
        questionTagService.deleteQuestionTag(id);
    }

    // Add a tag to a question
    @PostMapping("/addTagToQuestion")
    public void addTagToQuestion(@RequestParam Long questionId, @RequestParam Long tagId) {
        questionTagService.addTagToQuestion(questionId, tagId);
    }

    // Remove a tag from a question
    @PostMapping("/removeTagFromQuestion")
    public void removeTagFromQuestion(@RequestParam Long questionId, @RequestParam Long tagId) {
        questionTagService.removeTagFromQuestion(questionId, tagId);
    }

    // Get all questions by a specific tag
    @GetMapping("/questionsByTag/{tagId}")
    public List<Question> getQuestionsByTag(@PathVariable Long tagId) {
        return questionTagService.getQuestionsByTag(tagId);
    }
}
