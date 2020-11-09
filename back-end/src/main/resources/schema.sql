DROP TABLE IF EXISTS market;
CREATE TABLE market
(
    id     serial PRIMARY KEY,
    name   VARCHAR(255),
    change NUMERIC(10, 5),
    sell   NUMERIC(10, 5),
    buy    NUMERIC(10, 5)
);
