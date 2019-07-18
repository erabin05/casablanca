	
DROP DATABASE IF EXISTS casablanca;
CREATE DATABASE casablanca;

USE casablanca;

-- Create Table 'square'
DROP TABLE IF EXISTS square;
CREATE TABLE square
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT
);

-- Create Table 'carpet'
DROP TABLE IF EXISTS carpet;
CREATE TABLE carpet
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    color VARCHAR(6),
    playerID int,
    square1ID int,
    square2ID int,
    FOREIGN KEY (playerID) REFERENCES carpet(id),
    FOREIGN KEY (square1ID) REFERENCES square(id),
    FOREIGN KEY (square2ID) REFERENCES square(id)
);

-- Create Table 'player'
DROP TABLE IF EXISTS player;
CREATE TABLE player 
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    coins INT
);


-- Create Table 'character'
DROP TABLE IF EXISTS seller;
CREATE TABLE seller
(
    `id` INT,
    `raw` INT,
    `column` INT,
    `direction` INT,
    `rotation` INT
);


-- Insert squares
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);

INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);

INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);

INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);

INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);

INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);

INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);
INSERT INTO square VALUE (null);

-- Insert players
INSERT INTO player (coins) VALUE (60);
INSERT INTO player (coins) VALUE (60);
INSERT INTO player (coins) VALUE (60);
INSERT INTO player (coins) VALUE (60);
-- Insert seller
INSERT INTO seller VALUES (1, 3, 3, 1, 2);