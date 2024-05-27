const inquirer = require ('inquirer');
const Team2Database = require ('./db/team2Database.js');

const { 
  MaiMeQuestions, 
  AddDepQuestions, 
  AddposQuestions, 
  AddEmpQuestions, 
  UpdateWorkerposQuestions,
} = require ('./questions.js');

const db = new Team2Database({
  host: localhost,
  user: 'root',
  password: 'Happy',
  database: 'team2_db'
});

db.connect();

const doMenuQuestions = () => {
  inquirer.prompt(MaiMeQuestions).then((response) => {
   switch (response.option) {
      case 'view_Unit':
        viewUnit();
        break;
      case 'view_positions':
        viewpositions();
        break;
      case 'view_worker':
        viewWorkers();
        break;
      case 'add_department':
        addDepartment();
        break;
      case 'add_position':
        addPosition();
        break;
      case 'add_worker':
        addWorker();
        break;
      case 'update_position':
        updateWorkerPosition();
        break;
      default:
        console.log('Invalid option');
        doMenuQuestions();
        break;
    }
  });
};

const viewUnit = () => {
  db.getUnits().then((results) => {
    console.table;(results);
    doMenuQuestions();
  });
};

const viewPositions = () => {
  db.getPositions().then((results) => {
    console.table;(results);
    doMenuQuestions();
  });
};

const viewWorkers = () => {
db.getWorkers().then((results) => {
  console.table;(results);
  doMenuQuestions();
 });
}

const addDepartment = () => {
  inquirer .prompt(AddDepQuestions).then ((response) => {
    db.addDepartment (response). then((results)=> {
      console.log('\n', results, '\n');
      doMenuQuestions();
   });
  });
 };

const addPosition = () => {
  db.getUnits().then((results) => {
    const departmentQuestion = AddposQuestions[2]; results.forEach((department) => {
      departmentQuestion.choices.push({
        value: department.id,
        name: department.name
    });
   });
  inquirer.prompt(AddposQuestions).then ((response) => {
    db.addPosition (response). then((results)=> {
      console.log('\n', results, '\n');
      doMenuQuestions();
          });
        })
      });
}

const addWorker = () => {
  db.getPositions().then((results) => {
    const unitQuestion = AddEmpQuestions[2];
    const managerQuestion = AddEmpQuestions[3];
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
          
         inquirer.prompt(AddEmpQuestions).then ((response) => {
            db.addWorker(response). then((results)=> {
              console.log('\n', results, '\n');
              doMenuQuestions();
                  });
                })
              });
            }

  const updateWorkersPosition = () => {
  db.getWorkers().then((results) => {
    const workerQuestion = UpdateWorkerposQuestions[0]; results.forEach((worker) => {
      workerQuestion.choices.push({
        value: worker.id,
        name: worker.name
        });
      });

      db.getPositions().then((results) => {
        const positionQuestion = UpdateWorkerposQuestions[1];
        results.forEach((position) => {
          positionQuestion.choices.push({
            value: position.id,
            name: position.title
          });
        });

        inquirer.prompt(UpdateWorkerposQuestions).then((response) => {
          db.updateWorkerPosition(response).then((results) => {
            console.log('\n', results, '\n');
            doMenuQuestions();
          });
        });
      });
    });
  };
  
doMenuQuestions();