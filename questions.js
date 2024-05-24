const MaiMeQuestions = [
    {
      type: "list",
      name: "option",
      message: "What would you like to see?",
      choices: [
        { value: "view_Unit", name: "view all Unit" },
        { value: "view_positions", name: "view all positions" },
        { value: "view_worker", name: "view all worker" },
        { value: "add_Unit", name: "add a department" },
        { value: "add_position", name: "add a position" },
        { value: "add_worker", name: "add a worker" },
        { value: "update_position", name: "update an worker position" },
      ],
    },
  ];
  
  const AddDepQuestions = [
    {
      type: "input",
      name: "department_name",
      message: "Enter the name of the new department...",
    },
  ];
  
  const AddposQuestions = [
    {
      type: "input",
      name: "title",
      message: "Enter the title of new position...",
    },
    {
      type: "number",
      name: "salary",
      message: "Enter salary and new position (numeric)...",
    },
    {
      type: "list",
      name: "department_id",
      message: "Choose department for the position",
      choices: [],
    },
  ];
  
  const AddEmpQuestions = [
    {
      type: "input",
      name: "first_name",
      message: "Enter the first name of worker...",
    },
    {
      type: "input",
      name: "last_name",
      message: "Enter the last name of worker...",
    },
    {
      type: "list",
      name: "position_id",
      message: "select position for worker...",
      choices: [],
    },
    {
      type: "list",
      name: "manager_id",
      message: "select manager of worker...",
      choices: [],
    },
  ];
  
  const UpdateWorkerposQuestions = [
    {
      type: "list",
      name: "worker_id",
      message: "Select worker to update...",
      choices: [],
    },
    {
      type: "list",
      name: "position_id",
      message: "Select worker to update...",
      choices: [],
    },
  ];
  
  module.exports = {
    MaiMeQuestions,
    AddDepQuestions,
    AddRolQuestions,
    AddEmpQuestions,
    UpdateWorkerposQuestions,
  };
  