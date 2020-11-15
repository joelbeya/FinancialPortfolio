package com.fp.backend.controller;

import com.fp.backend.model.Market;
import com.fp.backend.repository.MarketRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class MarketController {

    static Logger logger = LoggerFactory.getLogger(MarketController.class);

    @Autowired
    private MarketRepository marketRepository;

    @GetMapping(value = "markets/name/{name}")
    public List<Market> findByNameContainingIgnoreCase(@PathVariable String name) {
        List<Market> markets = marketRepository.findByNameContainingIgnoreCase(name);
        logger.info("Market found {}", markets);
        return markets;
    }

    @GetMapping("markets")
    public List<Market> getAllMarkets() {
        for (Market market : marketRepository.findAll()) {
            logger.info("Get all markets : {} ", market);
        }
        return (List<Market>) marketRepository.findAll();
    }

    @PostMapping(value = "market/create")
    public Market postMarket(@RequestBody Market market) {
        Market _market = marketRepository.save(
                new Market(
                        market.getName(),
                        market.getChange(),
                        market.getSell(),
                        market.getBuy()
                )
        );
        logger.info("Market with name {} added properly", _market.getName());
        return _market;
    }

    @PutMapping(value = "market/{id}")
    public ResponseEntity<Market> updateMarket(
            @PathVariable("id") long id, @RequestBody Market market
    ) {
        logger.info("Update Market with ID = {}", id);
        Optional<Market> marketOptional = marketRepository.findById(id);
        if (marketOptional.isPresent()) {
            Market _market = marketOptional.get();
            _market.setName(market.getName());
            _market.setChange(market.getChange());
            _market.setSell(market.getSell());
            _market.setBuy(market.getBuy());
            return new ResponseEntity<>(
                    marketRepository.save(_market), HttpStatus.OK
            );
        } else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @RequestMapping(
            value = "market/delete/{id}",
            method = {RequestMethod.DELETE, RequestMethod.GET}
    )
    public ResponseEntity<String> deleteMarket(@PathVariable("id") long id) {
        if (marketRepository.existsById(id)) {
            marketRepository.deleteById(id);
            logger.info("Delete market with ID {}", id);
            return new ResponseEntity<>("Market has been deleted!", HttpStatus.OK);
        } else {
            logger.error("Market with id {} not found or does not exist or operation not allowed", id);
            return new ResponseEntity<>("Market has not been deleted", HttpStatus.METHOD_NOT_ALLOWED);
        }
    }

    @RequestMapping(
            value = "markets/delete/all",
            method = {RequestMethod.DELETE, RequestMethod.GET}
    )
    public ResponseEntity<String> deleteAllMarket() {
        if (!getAllMarkets().isEmpty()) {
            logger.info("Delete all markets");
            marketRepository.deleteAll();
            return new ResponseEntity<>("All Markets have been deleted!", HttpStatus.OK);
        } else {
            logger.warn("Markets list already empty");
            return new ResponseEntity<>("Operation failed", HttpStatus.METHOD_NOT_ALLOWED);
        }
    }

}
