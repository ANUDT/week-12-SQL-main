INSERT INTO department (id, name) VALUES (1,'IT'), (2,'HR'), (3,'SALES'), (4,'FINANCE'), (5,'TRANSPORT');


INSERT INTO position  (id, title, salary,  department_id) VALUES 
(1,'Full Stack', 60000, 1), (2,'HR Advisor', 30000, 2), (3,'HR BP', 50000, 2), (4,'Sales Coordinator', 30000, 3), (5,'Accountant', 70000, 4), (6,'Transport Lead', 65000, 5);

INSERT INTO worker  (id, first_nm, first_nm, position_id, manager_id) VALUES 
(1,'Micheal', 'Bolton', 1, NULL),
(2,'Nicky', 'Minaj', 5, 6),
(3,'Diana', 'Ross', 4, 3),
(4,'Elvis','Presley', 6, NULL),
(5,'Madonna', 'Madonna', 5, NULL),
(6,'Whitney', 'Houston', 1, NULL),
(7,'Sean', 'Paul', 2, 1,),
(8,'Daddy', 'Yankee', 3, 7),
(9,'Cliff', 'Richards', 4, NULL),
(10,'Tina', 'Turner', 2, NULL),
(11,'Janet', 'Jackson', 5, 6),
(12,'Adriana', 'Grande', 3, 4),
(13,'Jennifer', 'Lopez', 1, 2),
(14,'Shakira', 'Shakira', 6, NULL),
(15,'Shabba', 'Ranks', 3, 4),
(16,'Bad', 'BoltonBunny', 4, 6);

