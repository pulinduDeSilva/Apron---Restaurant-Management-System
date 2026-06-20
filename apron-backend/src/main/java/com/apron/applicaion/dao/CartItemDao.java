package com.apron.applicaion.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apron.applicaion.entity.CartItem;

@Repository
public interface CartItemDao extends JpaRepository<CartItem, Long> {

    List<CartItem> findByCartId(Long cartId);
    Optional<CartItem> findByCartIdAndProductId(Long cartId, Long productId);
}