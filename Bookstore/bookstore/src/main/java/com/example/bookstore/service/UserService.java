package com.example.bookstore.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.bookstore.model.User;
import com.example.bookstore.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    public UserRepository userRepository;

    public User registerUser (User user){
        return userRepository.save(user);
    }

    public Optional<User> findByUsername (String username){
        return userRepository.findByUsername(username);
    }
}
