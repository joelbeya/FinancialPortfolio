package com.fp.backend.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "market")
public class Market {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "change", precision = 10, scale = 5)
    private double change;

    @Column(name = "sell", precision = 10, scale = 5)
    private double sell;

    @Column(name = "buy", precision = 10, scale = 5)
    private double buy;

}
