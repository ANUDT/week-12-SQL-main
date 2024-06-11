DROP DATABASE IF EXISTS team2_db;
CREATE DATABASE team2_db;

USE team2_db;

CREATE TABLE department (
  id SERIAL PRIMARY KEY,
  name VARCHAR(35) NOT NULL
);

CREATE TABLE position (
  id SERIAL PRIMARY KEY,
  title VARCHAR(35),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES department (id)
  ON DELETE SET NULL
);

CREATE TABLE worker (
  id SERIAL PRIMARY KEY,
  first_nm VARCHAR(35),
  last_nm VARCHAR(35),
  position_id INT,
  manager_id INT,
  department_id INT,
  FOREIGN KEY (position_id) REFERENCES position (id) ON DELETE SET NULL,
  FOREIGN KEY (department_id) REFERENCES department_id (id) ON DELETE SET NULL
);