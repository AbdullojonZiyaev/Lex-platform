package com.example.Database.Repository;


import com.example.Database.Models.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
    List<Question> findByTitleLike(String title);
    Optional<Question> findById(Long id);
    List<Question> findByCategoryId(Long categoryId);
    List<Question> findByStartupId(Long startupId);
    void deleteById(Long id);
}
