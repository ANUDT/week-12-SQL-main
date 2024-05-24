INSERT INTO department (id, name) VALUES (1,'IT');
INSERT INTO department (id, name) VALUES (2,'HR');
INSERT INTO department (id, name) VALUES (3,'SALES');
INSERT INTO department (id, name) VALUES (4,'FINANCE');
INSERT INTO department (id, name) VALUES (5,'TRANSPORT');

INSERT INTO position  (id, title, salary,  department_id) VALUES (1,'Full Stack', 60000, 1);
INSERT INTO position  (id, title, salary,  department_id) VALUES (2,'HR Advisor', 30000, 2);
INSERT INTO position  (id, title, salary,  department_id) VALUES (3,'HR BP', 50000, 2);
INSERT INTO position  (id, title, salary,  department_id) VALUES (4,'Sales Coordinator', 30000, 3);
INSERT INTO position  (id, title, salary,  department_id) VALUES (5,'Accountant', 70000, 4);
INSERT INTO position  (id, title, salary,  department_id) VALUES (6,'Transport Lead', 65000, 5);

INSERT INTO worker  (id, first_name, last_name, position_id, manager_id) VALUES (1,'Micheal', 'Bolton', 1, NULL);
INSERT INTO worker  (id, first_name, last_name, position_id, manager_id) VALUES (2,'Nicky', 'Minaj', 5, 6);
INSERT INTO worker  (id, first_name, last_name, position_id, manager_id) VALUES (3,'Diana', 'Ross', 4, 3);
INSERT INTO worker  (id, first_name, last_name, position_id, manager_id) VALUES (4,'Elvis','Presley', 6, NULL);
INSERT INTO worker  (id, first_name, last_name, position_id, manager_id) VALUES (5,'Madonna', 'Madonna', 5, NULL);
INSERT INTO worker  (id, first_name, last_name, position_id, manager_id) VALUES (6,'Whitney', 'Houston', 1, NULL);
INSERT INTO worker  (id, first_name, last_name, position_id, manager_id) VALUES (7,'Sean', 'Paul', 2, 1,);
INSERT INTO worker  (id, first_name, last_name, position_id, manager_id) VALUES (8,'Daddy', 'Yankee', 3, 7);
INSERT INTO worker  (id, first_name, last_name, position_id, manager_id) VALUES (9,'Cliff', 'Richards', 4, NULL);
INSERT INTO worker  (id, first_name, last_name, position_id, manager_id) VALUES (10,'Tina', 'Turner', 2, NULL);
INSERT INTO worker  (id, first_name, last_name, position_id, manager_id) VALUES (11,'Janet', 'Jackson', 5, 6);
INSERT INTO worker  (id, first_name, last_name, position_id, manager_id) VALUES (12,'Adriana', 'Grande', 3, 4);
INSERT INTO worker  (id, first_name, last_name, position_id, manager_id) VALUES (13,'Jennifer', 'Lopez', 1, 2);
INSERT INTO worker  (id, first_name, last_name, position_id, manager_id) VALUES (14,'Shakira', 'Shakira', 6, NULL);
INSERT INTO worker  (id, first_name, last_name, position_id, manager_id) VALUES (15,'Shabba', 'Ranks', 3, 4);
INSERT INTO worker  (id, first_name, last_name, position_id, manager_id) VALUES (16,'Bad', 'BoltonBunny', 4, 6);

module.exports = new DB();
