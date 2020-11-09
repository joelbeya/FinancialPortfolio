package com.fp.backend.controller;

import com.fp.backend.model.Market;
import com.fp.backend.repository.MarketRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class MarketController {

    @Autowired
    final static Logger logger = LoggerFactory.getLogger(MarketController.class);

    @Autowired
    private MarketRepository marketRepository;

    @GetMapping("markets")
    public List<Market> markets() {
        for (Market market : marketRepository.findAll()) {
            logger.info("Get all markets : {} ", market);
        }
        return (List<Market>) marketRepository.findAll();
    }
}
