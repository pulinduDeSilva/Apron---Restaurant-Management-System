package com.apron.applicaion.dao;


import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apron.applicaion.entity.Category;

@Repository
public interface CategoryDao extends JpaRepository<Category, Long> {
    Optional<Category> findById(long id);
}