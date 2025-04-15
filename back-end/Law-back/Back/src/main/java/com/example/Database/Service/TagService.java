package com.example.Database.Service;

import com.example.Database.Models.Tag;
import com.example.Database.Repository.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class TagService {

    @Autowired
    private TagRepository tagRepository;

    public Tag getTagById(Long id) {
        Optional<Tag> tag = tagRepository.findById(id);
        return tag.orElse(null);
    }

    public List<Tag> getAllTags() {
        return tagRepository.findAll();
    }

    @Transactional
    public Tag createTag(Tag tag) {
        return tagRepository.save(tag);
    }

    @Transactional
    public Tag updateTag(Long id, Tag updatedTag) {
        Optional<Tag> existingTagOptional = tagRepository.findById(id);
        if (existingTagOptional.isPresent()) {
            Tag existingTag = existingTagOptional.get();
            existingTag.setName(updatedTag.getName());
            return tagRepository.save(existingTag);
        }
        return null;
    }

    @Transactional
    public void deleteTag(Long id) {
        tagRepository.deleteById(id);
    }
}
