package com.example.Database.Service;

import com.example.Database.Models.Question;
import com.example.Database.Models.QuestionTag;
import com.example.Database.Models.Tag;
import com.example.Database.Repository.QuestionRepository;
import com.example.Database.Repository.QuestionTagRepository;
import com.example.Database.Repository.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class QuestionTagService {

    @Autowired
    private QuestionTagRepository questionTagRepository;

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private TagRepository tagRepository;

    public List<QuestionTag> getAllQuestionTags() {
        return questionTagRepository.findAll();
    }

    @Transactional
    public QuestionTag createQuestionTag(QuestionTag questionTag) {
        return questionTagRepository.save(questionTag);
    }

    @Transactional
    public void deleteQuestionTag(Long id) {
        questionTagRepository.deleteById(id);
    }

    // Add a tag to a question
    @Transactional
    public void addTagToQuestion(Long questionId, Long tagId) {
        Question question = questionRepository.findById(questionId)
                .orElseThrow(() -> new RuntimeException("Question not found"));
        Tag tag = tagRepository.findById(tagId)
                .orElseThrow(() -> new RuntimeException("Tag not found"));

        QuestionTag questionTag = new QuestionTag();
        questionTag.setQuestion(question);
        questionTag.setTag(tag);

        questionTagRepository.save(questionTag);
    }

    // Remove a tag from a question
    @Transactional
    public void removeTagFromQuestion(Long questionId, Long tagId) {
        questionTagRepository.deleteByQuestionIdAndTagId(questionId, tagId);
    }

    // Find question by tag
    public List<Question> getQuestionsByTag(Long tagId) {
        List<QuestionTag> questionTags = questionTagRepository.findByTagId(tagId);
        return questionTags.stream()
                .map(QuestionTag::getQuestion)  // Get the associated Question
                .collect(Collectors.toList());
    }
}
