package com.example.bookstore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;

import com.example.bookstore.model.Book;
import com.example.bookstore.service.BookService;

@Controller
public class HomeController {
    @Autowired
    private BookService bookService;

    @GetMapping("/")
    public String home (Model model) {
        model.addAttribute("books", bookService.getAllBooks());
        return "home";
    }

}
