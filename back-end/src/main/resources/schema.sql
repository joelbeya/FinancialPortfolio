DROP TABLE IF EXISTS market;
CREATE TABLE market
(
    id     serial PRIMARY KEY,
    name   VARCHAR(255),
    change DOUBLE PRECISION,
    sell   DOUBLE PRECISION,
    buy    DOUBLE PRECISION
);
