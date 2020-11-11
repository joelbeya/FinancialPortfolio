package com.fp.backend.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "market")
public class Market {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private @NonNull long id;

    @Column(name = "name")
    private String name;

    @Column(name = "change", precision = 10, scale = 5)
    private double change;

    @Column(name = "sell", precision = 10, scale = 5)
    private double sell;

    @Column(name = "buy", precision = 10, scale = 5)
    private double buy;

    public Market(String name, double change, double sell, double buy) {
        this.name = name;
        this.change = change;
        this.sell = sell;
        this.buy = buy;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getChange() {
        return change;
    }

    public void setChange(double change) {
        this.change = change;
    }

    public double getSell() {
        return sell;
    }

    public void setSell(double sell) {
        this.sell = sell;
    }

    public double getBuy() {
        return buy;
    }

    public void setBuy(double buy) {
        this.buy = buy;
    }

    @Override
    public String toString() {
        return "Market{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", change=" + change +
                ", sell=" + sell +
                ", buy=" + buy +
                '}';
    }
}
