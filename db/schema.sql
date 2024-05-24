DROP Dbase IF EXISTS team2_db;
CREATE Dbase team2_db;

USE Dbase team2_db:

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