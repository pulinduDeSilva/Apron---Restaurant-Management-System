package com.apron.applicaion.dao;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.apron.applicaion.entity.OrderItem;

@Repository
public interface OrderItemDao extends JpaRepository<OrderItem, Long> {

    List<OrderItem> findByOrderId(Long orderId);
    Optional<OrderItem> findByOrderIdAndProductId(Long orderId, Long productId);
    boolean existsByOrderIdAndProductId(Long orderId, Long productId);

}