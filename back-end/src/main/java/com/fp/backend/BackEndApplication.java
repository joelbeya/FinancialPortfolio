package com.fp.backend;

import com.fp.backend.model.Market;
import com.fp.backend.repository.MarketRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackEndApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackEndApplication.class, args);
	}

	@Bean
	ApplicationRunner init(MarketRepository marketRepository) {
		return args -> {
			for (Market market : marketRepository.findAll()) {
				System.out.println(market);
			}
		};
	}
}
