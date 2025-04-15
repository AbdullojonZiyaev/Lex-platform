package com.example.Database.Repository;


import com.example.Database.Models.QuestionTag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionTagRepository extends JpaRepository<QuestionTag, Long> {
    void deleteByQuestionIdAndTagId(Long questionId, Long tagId);
    List<QuestionTag> findByQuestionId(Long questionId);
    List<QuestionTag> findByTagId(Long tagId);
}
