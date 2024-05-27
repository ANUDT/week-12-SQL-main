DROP DATABASE IF EXISTS team2_db;
CREATE DATABASE team2_db;

USE DATABASE team2_db:

\c team2_db;

CREATE TABLE department (
  id SERIAL PRIMARY KEY,
  name VARCHAR(35) NOT NULL
)

CREATE TABLE position (
  id SERIAL PRIMARY KEY,
  name VARCHAR(35) 
  title VARCHAR (35),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES department (id)
  on DELETE SET NULL
);

CREATE TABLE worker (
  id SERIAL PRIMARY KEY,
  first_nm VARCHAR (35),
  first_nm VARCHAR (35),
  position_id INT,
  manager_id INT,
  FOREIGN KEY (position_id) REFERENCES position (id) on DELETE SET NULL
  FOREIGN KEY (position_id) REFERENCES position (id) on DELETE SET NULL
);