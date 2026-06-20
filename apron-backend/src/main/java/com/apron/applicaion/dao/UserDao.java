package com.apron.applicaion.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apron.applicaion.entity.User;
import com.apron.applicaion.enums.Roles;

@Repository
public interface UserDao extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);
    List<User> findByRole(Roles role);
    boolean existsByEmail(String email);


}