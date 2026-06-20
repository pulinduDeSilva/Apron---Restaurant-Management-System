package com.apron.applicaion.dao;


import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apron.applicaion.entity.Cart;

@Repository
public interface CartDao extends JpaRepository<Cart, Long> {
    Optional<Cart> findByUserId(Long userId);
    boolean existsByUserId(Long userId);
}