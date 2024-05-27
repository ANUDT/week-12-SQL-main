const Dbase = require('./Database.js');

class Team2Dbase extends Database {
    constructor(options) {
        super(options);
    }
}

getUnits() {
  return new Promise((resolve, reject) => {
    this.db.query('SELECT * FROM department', 
    (err, results) => {
      if (err) reject(err);
      else resolve(results.rows);
    });
  });
}


getPositions () {
 return new Promise((resolve, reject) => {
  this.db.query(
    `SELECT position.id, position.title, position.salary, department.name AS department_name 
    FROM position 
    INNER JOIN department ON position.department_id = department.id`,
    (err, results) => {
      if (err) reject(err);
      else resolve(results.rows);
    });
  });
}

getWorker() {
    return new Promise((resolve, reject) => {
        this.db.query(
               `SELECT worker.id, 
                    CONCAT(worker.first_nm, ' ', worker.last_nm) AS name, 
                    position.title AS position_title, 
                    position.salary AS position_salary, 
                    department.name AS department_name, 
                    COALESCE(CONCAT(manager.first_nm, ' ', manager.last_nm), '') AS manager_name
             FROM worker
             INNER JOIN position ON worker.position_id = position.id
             INNER JOIN department ON position.department_id = department.id
             LEFT JOIN worker AS manager ON worker.manager_id = manager.id`,
      (err, results) => {
      if (err) reject(err);
      else resolve(results.rows);
    });
  }); 
}

addDepartment(department) {
 return new Promise((resolve, reject) => {
  this.db.query('INSERT INTO department(name) VALUES ($1) RETURNING *', { name: department.department_name }, (err, results) => {
   if (err) reject(err);
    else resolve(`Department ${department.department_name} added successfully`);
   });
  });
 }

addPosition(position) {
 return new Promise((resolve, reject) => {
  const { title, salary, department_id } = worker;
   this.db.query('INSERT INTO position (title, salary, department_id ) VALUES ($1, $2, $3) RETURNING *',
   [title, salary, department_id] (err, results) => {
    if (err) reject(err);
     else resolve(`Position ${title} added successfully`);
   });
  });
 }

addWorker(worker) {
return new Promise((resolve, reject) => {
 const { first_nm, last_nm, position_id, manager_id } = worker;
  this.db.query('INSERT INTO worker (first_nm, last_nm, position_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *',
   [first_nm, last_nm, position_id, manager_id] (err, results) => {
    if (err) reject(err);
     else resolve(`${first_nm} ${last_nm} added successfully`);
    });
   });
  }

UpdateWorkerposition(worker) {
 return new Promise((resolve, reject) => {
  const { worker_id, position_id } = worker;
  this.db.query('UPDATE worker SET position_id= $1 WHERE id = $2 RETURNING *', [position_id, worker_id], (err, results) => {
    if (err) reject(err);
     else resolve (results).rows;
  });
 });
}

module.exports = Team2Database;

        