### Schema

-- CREATE DATABASE burgers_db;
-- USE burgers_db;

-- CREATE TABLE burgers
-- (
--     id INT NOT NULL AUTO_INCREMENT,
--     burger_name VARCHAR(255) NOT NULL,
--     devoured BOOLEAN,
--     PRIMARY KEY (id)
-- );

-- CREATE DATABASE burger_db;
-- USE burger_db;

-- CREATE TABLE burgers
-- (
--     id int NOT NULL AUTO_INCREMENT,
-- 	name varchar(255) NOT NULL,
-- 	devoured BOOLEAN DEFAULT false,
-- 	PRIMARY KEY (id)
-- );

-- CREATE DATABASE burger_db;
-- USE burger_db;

-- CREATE TABLE burgers
-- (
--     id int NOT NULL AUTO_INCREMENT,
-- 	burger_name VARCHAR(255) NOT NULL,
-- 	devoured BOOLEAN DEFAULT false,
-- 	PRIMARY KEY (id)
-- );

DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
