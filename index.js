const inquirer = require("inquirer");
const {
  MaiMeQuestions,
  AddDepartmentQuestions,
  AddPosQuestions,
  AddEmpQuestions,
  UpdateWorkersQuestions,
} = require("./db/questions.js");

const Team2Database = require("./db/team2Database.js");

const db = new Team2Database({
  user: "postgres",
  password: "Happy",
  host: "localhost",
  database: "team2_db",
});

db.connect();

const doMenuQuestions = () => {
  inquirer.prompt(MaiMeQuestions).then((response) => {
    switch (response.option) {
      case "view_Unit":
        view_Unit();
        break;
      case "view_positions":
        view_positions();
        break;
      case "view_worker":
        view_worker();
        break;
      case "add_department":
        add_department();
        break;
      case "add_position":
        add_position();
        break;
      case "add_worker":
      add_worker();
      break;
      case "update_position":
        update_position();
        break;
    }
  });
};

const view_Unit = () => {
 // console.log("DB variable: ", db)
 // console.log("Team variable: ", Team2Database)

  db.getUnits().then((results) => {
    console.log("ALL Departments: ", results);

    console.table(results);
    doMenuQuestions();
  });
};

const view_positions = () => {
  db.getPositions().then((results) => {
    console.table(results);

    doMenuQuestions();
  });
};

const view_worker = () => {
  db.getWorker().then((results) => {
    console.table(results);
    doMenuQuestions();
  });
};

const add_department = () => {
  inquirer.prompt(AddDepartmentQuestions).then((response) => {
    db.addDepartment(response).then((results) => {
      console.log("\n", results, "\n");
      doMenuQuestions();
    });
  });
};
const add_position = () => {
  db.getUnit().then((results) => {
    const DepartmentQuestion = AddPosQuestions[2];
    results.forEach((department) => {
      departmentQuestion.choices.push({
        value: department_id,
        name: department.name,
      });
    });

    inquirer.prompt(AddPosQuestions).then((response) => {
      db.addPosition(response).then((results) => {
        console.log("\n", results, "\n");
        doMenuQuestions();
      });
    });
  });
};

const add_worker = () => {
  db.getPositions().then((results) => {
    const positionQuestion = AddEmpQuestions[3];
    results.forEach((worker) => {
      managerQuestion.choices.push({
        value: worker.id,
        name: worker.name,
      });
    });

    managerQuestion.choices.push({
      value: null,
      name: "None",
    });

    inquirer.prompt(AddEmpQuestions).then((response) => {
      db.addWorker(response).then((results) => {
        console.log("\n", results, "\n");
        doMenuQuestions();
      });
    });
  });
};

const update_position = () => {
  db.getWorker().then((results) => {
    const workerQuestion = UpdateWorkerQuestions[0];
    results.forEach((worker) => {
      managerQuestion.choices.push({
        value: worker.id,
        name: worker.name,
      });
    });

    db.gePositions().then((results) => {
      const positionQuestion = UpdateWorkerQuestions[1];
      results.forEach((position) => {
        positionQuestion.choices.push({
          value: position_id,
          name: position.title,
        });
      });
    });
    inquirer.prompt(UpdateWorkerQuestions).then((response) => {
      db.updateWorker(response).then((results) => {
        console.log("\n", results, "\n");
        doMenuQuestions();
      });
    });
  });
};

doMenuQuestions();

















