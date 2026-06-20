package com.apron.applicaion.dao;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apron.applicaion.entity.Order;

@Repository
public interface OrderDao extends JpaRepository<Order, Long> {
    List<Order> findByUserId(Long userId);

}