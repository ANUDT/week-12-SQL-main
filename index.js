const inquirer = require ('inquirer');
const db = request ('./Database.js');

const { 
  MaiMeQuestions, 
  AddDepQuestions, 
  AddposQuestions, 
  AddEmpQuestions, 
  UpdateWorkerposQuestions,
} = require ("./questions.js");
const WorkerDbase = require("./db/team2Dbase.js");

const db = new team2Dbase({
  host: localhost,
  user: 'root',
  password: 'Happy',
  Dbase: 'worker_db'

});

db.connect();

const doMenuQuestions = () => {
  inquirer
  .prompt(MaiMeQuestions)
  .then((response) => {

    switch (response.option) {
      case 'view_Unit':
        view_Unit();
        break;
      case 'view_positions':
        view_positions();
        break;
      case 'view_worker':
        view_Unit();
        break;
      case 'add_department':
        view_department();
        break;
      case 'add_position':
        view_position();
        break;
    }
  })
}

const view_Unit = () => {
  db.getUnit().then((results) => {
    console.table;(results);
    doMenuQuestions();
  });
}

const view_positions = () => {
  db.getpositions().then((results) => {
    console.table;(results);
    doMenuQuestions();
  });
}
const view_worker = () => {
db.getWorker().then((results) => {
  console.table;(results);
  doMenuQuestions();
});
}

const add_department = () => {
  inquirer
   .prompt(AddDepQuestions)
   .then ((response) => {
    db.addDepartment (response). then((results)=> {
      console.log('\n', results, '\n');
      doMenuQuestions();
  });
  });
}
const add_position = () => {
  db.getUnit().then((results) => {
    const DepartmentQuestion = AddposQuestions[2];
    results.forEach((department) => {
      departmentQuestion.choices.push({
        value: department_id,
        name: department.name
  });
  });

  inquirer
  .prompt(AddposQuestions)
   .then ((response) => {
    db.addposition (response). then((results)=> {
      console.log('\n', results, '\n');
      doMenuQuestions();
          });
        })
      });
}

const add_worker = () => {
  db.getpositions().then((results) => {
    const positionQuestion = AddEmpQuestions[3];
    results.forEach((worker) => {
      managerQuestion.choices.push({
        value: worker.id,
        name: worker.name
        });
      });

          managerQuestion.choices.push({
          value: null,
          name: 'None'
          });
          
         inquirer
          .prompt(AddEmpQuestions)
           .then ((response) => {
            db.addWorker(response). then((results)=> {
              console.log('\n', results, '\n');
              doMenuQuestions();
                  });
                })
              });
            }

  const update_position = () => {
  db.getWorker().then((results) => {
    const workerQuestion = UpdateWorkerposQuestions[0];
    results.forEach((worker) => {
      managerQuestion.choices.push({
        value: worker.id,
        name: worker.name
        });
      });

      db.getpositions().then((results) => {
        const positionQuestion = UpdateWorkerposQuestions[1];
        results.forEach((position) => {
          positionQuestion.choices.push({
            value: position_id,
            name: position.title
          });
        });

  
  
   doMenuQuestions();