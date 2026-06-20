package com.apron.applicaion.dao;


import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apron.applicaion.entity.Product;

@Repository
public interface ProductDao extends JpaRepository<Product, Long> {
    Optional<Product> findByProductId(Long productId);
}