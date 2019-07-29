	
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
    playerID int,
    raw_square1 INT,
    raw_square2 INT,
    column_square1 INT,
    column_square2 INT,
    position BOOLEAN,
    FOREIGN KEY (playerID) REFERENCES carpet(id)
);

-- Create Table 'player'
DROP TABLE IF EXISTS player;
CREATE TABLE player 
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    color VARCHAR(6),
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

-- Create Table 'game'
DROP TABLE IF EXISTS game;
CREATE TABLE game
(
    `id` INT,
    `player` INT,
    `step` INT,
    `turn` INT
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
INSERT INTO player (coins, color) VALUE (60, 'blue');
INSERT INTO player (coins, color) VALUE (60, 'red');
INSERT INTO player (coins, color) VALUE (60, 'brown');
INSERT INTO player (coins, color) VALUE (60, 'yellow');

-- Insert seller
INSERT INTO seller VALUES (1, 3, 3, 1, 2);

-- Insert carpets

INSERT INTO carpet (playerID) VALUES (1);
INSERT INTO carpet (playerID) VALUES (1);
INSERT INTO carpet (playerID) VALUES (1);
INSERT INTO carpet (playerID) VALUES (1);
INSERT INTO carpet (playerID) VALUES (1);
INSERT INTO carpet (playerID) VALUES (1);
INSERT INTO carpet (playerID) VALUES (1);
INSERT INTO carpet (playerID) VALUES (1);
INSERT INTO carpet (playerID) VALUES (1);
INSERT INTO carpet (playerID) VALUES (1);

INSERT INTO carpet (playerID) VALUES (2);
INSERT INTO carpet (playerID) VALUES (2);
INSERT INTO carpet (playerID) VALUES (2);
INSERT INTO carpet (playerID) VALUES (2);
INSERT INTO carpet (playerID) VALUES (2);
INSERT INTO carpet (playerID) VALUES (2);
INSERT INTO carpet (playerID) VALUES (2);
INSERT INTO carpet (playerID) VALUES (2);
INSERT INTO carpet (playerID) VALUES (2);
INSERT INTO carpet (playerID) VALUES (2);

INSERT INTO carpet (playerID) VALUES (3);
INSERT INTO carpet (playerID) VALUES (3);
INSERT INTO carpet (playerID) VALUES (3);
INSERT INTO carpet (playerID) VALUES (3);
INSERT INTO carpet (playerID) VALUES (3);
INSERT INTO carpet (playerID) VALUES (3);
INSERT INTO carpet (playerID) VALUES (3);
INSERT INTO carpet (playerID) VALUES (3);
INSERT INTO carpet (playerID) VALUES (3);
INSERT INTO carpet (playerID) VALUES (3);

INSERT INTO carpet (playerID) VALUES (4);
INSERT INTO carpet (playerID) VALUES (4);
INSERT INTO carpet (playerID) VALUES (4);
INSERT INTO carpet (playerID) VALUES (4);
INSERT INTO carpet (playerID) VALUES (4);
INSERT INTO carpet (playerID) VALUES (4);
INSERT INTO carpet (playerID) VALUES (4);
INSERT INTO carpet (playerID) VALUES (4);
INSERT INTO carpet (playerID) VALUES (4);
INSERT INTO carpet (playerID) VALUES (4);

-- Insert game turn, step, player playing
INSERT INTO game (id, player, step, turn) VALUES (1, 1, 0, 0);