const Dbase = require('./team2Dbase.js');

class team2Dbase extends Dbase {
    constructor(options) {
        super(options);
    }
}

getUnit () {
    return new Promise((resolve, reject) => {
        this.db.query('SELECT *FROM department', (err, results) => {
        if (err) {
        reject(err);
        return;
        }
        resolve (results);
    });
  });
};

getpositions () {
 return new Promise((resolve, reject) => {
  this.db.query(
    "SELECT position.id, position.title, position.salary, department.name as department_name FROM position INNER JOIN department ON position.department_id = department.id",
     (err, results) => {
       if (err) {
        reject(err);
        }
        resolve (results);
      }
    );
  });
}

getWorker() {
    return new Promise((resolve, reject) => {
        this.db.query(
        `SELECT 
        worker.id,
        CONCAT (worker.first_name,' ', worker.last_name) as name,
        position.title as position_title,
        position.salary as position_salary,
        department.name as department_name,
        IF(CONCAT(manager.first_name,' ', manager.last_name) IS NULL, '',CONCAT(manager.first_name, ' ', manager.last_name)) as manager_name

        FROM worker
        INNER JOIN position ON worker.position_id = position.id
        INNER JOIN department ON position.department_id = department.id
        LEFT JOIN worker as manager ON worker.manager_id = manager.id`
        ,(err, results) => {
        if (err) {
        reject(err);
        }
        resolve (results);
           }
        );
    });
}  
    

addDepartment(department) {
 return new Promise((resolve, reject) => {
  this.db.query('INSERT INTO department SET ?', { name: department.department_name }, (err, results) => {
   if (err) {
    reject(err);
} else {
 resolve(`Department ${department.department_name} added successfully`);
   }
  });
 });
}



addposition(position) {
const positionData = {
    title: position.title,
    salary: position.salary,
    department_id: position.department_id
};

return new Promise((resolve, reject) => {
 this.db.query('INSERT INTO position SET ?', positionData, (err, results) => {
  if (err) {
   reject(err);
    } else {
     resolve(`position ${position.title} added successfully`);
    }
  });
 });
}

addWorker(worker) {
const workerData = {
    first_name: worker.first_name,
    last_name: worker.last_name,
    position_id: worker.position_id,
    manager_id: worker.manager_id
};

return new Promise((resolve, reject) => {
 this.db.query('INSERT INTO worker SET ?', workerData, (err, results) => {
    if (err) {
        reject(err);
    } else {
        resolve(`${worker.first_name} ${worker.last_name} added successfully`);
        }
       });
      });
     }

UpdateWorkerposition(worker) {
 return new Promise((resolve, reject) => {
  this.db.query('UPDATE worker SET position_id=? WHERE id=?', [worker.position_id, worker.worker_id], (err, results) => {
    if (err) {
      reject(err);
     }
    resolve (results);
  });
 });
}

module.exports = WorkerDbase;

        