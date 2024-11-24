package com.example.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.data;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class myController {
    
    @PostMapping("/")
    public double getResult(@RequestBody data d){
         
        double s1 = d.getS1m1() * 0.3 + d.getS1m2() * 0.7;
        double s2 = d.getS2m1() * 0.3 + d.getS2m2() * 0.7;
        double s3 = d.getS3m1() * 0.3 + d.getS3m2() * 0.7;
        double s4 = d.getS4m1() * 0.3 + d.getS4m2() * 0.7;

        double total = (s1+s2+s3+s4) / 4;
        return total / 10;
    }
}
