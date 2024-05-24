DROP DATABASE IF EXISTS team2_db;
CREATE DATABASE team2_db;

USE DATABASE team2_db:

\c team2_db;

CREATE TABLE team2_db (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL
)
CREATE TABLE department
(
  id INT NOT NULL 
  AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR (30)
);

CREATE TABLE position
(
  id INT NOT NULL
  AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR (30),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES department (id)
  on DELETE SET NULL
);

CREATE TABLE worker
(
  id INT NOT NULL
  AUTO_INCREMENT PRIMARY KEY,
  first_nm VARCHAR (30),
  first_nm VARCHAR (30),
  position_id INT,
  manager_id INT,
  FOREIGN KEY (position_id)
  REFERENCES position (id)
  on DELETE SET NULL
);