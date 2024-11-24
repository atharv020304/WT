package com.example.bookstore.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import com.example.bookstore.repository.BookRepository;
import com.example.bookstore.model.Book;

@Service
public class BookService {
@Autowired
private BookRepository bookRepository;

public List<Book> getAllBooks() {
    return bookRepository.findAll();
}
    
}
