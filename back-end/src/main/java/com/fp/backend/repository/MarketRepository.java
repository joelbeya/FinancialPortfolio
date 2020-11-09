package com.fp.backend.repository;

import com.fp.backend.model.Market;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public interface MarketRepository
        extends CrudRepository<Market, Long> {
}
