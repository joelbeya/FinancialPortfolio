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
    private @NonNull Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "change")
    private Long change;

    @Column(name = "sell")
    private Long sell;

    @Column(name = "buy")
    private Long buy;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getChange() {
        return change;
    }

    public void setChange(Long change) {
        this.change = change;
    }

    public Long getSell() {
        return sell;
    }

    public void setSell(Long sell) {
        this.sell = sell;
    }

    public Long getBuy() {
        return buy;
    }

    public void setBuy(Long buy) {
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
