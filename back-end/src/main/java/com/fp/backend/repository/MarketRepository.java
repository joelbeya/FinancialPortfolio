package com.fp.backend.repository;

import com.fp.backend.model.Market;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RepositoryRestResource
@CrossOrigin(origins = "http://localhost:4200")
public interface MarketRepository extends CrudRepository<Market, Long> {

    List<Market> findByNameContainingIgnoreCase(String name);

}
