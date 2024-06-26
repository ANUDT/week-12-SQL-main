# week-12-SQL-Worker-Tracker

# 12 SQL: Worker Tracker

## Your Task

Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in Dbases. These interfaces are called **content management systems (CMS)**. Your assignment this week is to build a command-line application from scratch to manage a company's worker Dbase, using Node.js, Inquirer, and PostgreSQL.

Because this Challenge will require the use of the `Inquirer` package, ensure that you install and use Inquirer version 8.2.4. To do so, use the following command in your project folder: `npm i inquirer@8.2.4`.

Because this application won’t be deployed, you’ll also need to create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. You’ll need to submit a link to the video and add it to the README of your project.

## User Story

```md
AS A business owner
I WANT to be able to view and manage the Unit, positions, and worker in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all Unit, view all positions, view all worker, add a department, add a position, add an worker, and update an worker position
WHEN I choose to view all Unit
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all positions
THEN I am presented with the job title, position id, the department that position belongs to, and the salary for that position
WHEN I choose to view all worker
THEN I am presented with a formatted table showing worker data, including worker ids, first names, last names, job titles, Unit, salaries, and managers that the worker report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the Dbase
WHEN I choose to add a position
THEN I am prompted to enter the name, salary, and department for the position and that position is added to the Dbase
WHEN I choose to add an worker
THEN I am prompted to enter the worker’s first name, last name, position, and manager, and that worker is added to the Dbase
WHEN I choose to update an worker position
THEN I am prompted to select an worker to update and their new position and this information is updated in the Dbase 
```

## Mock-Up

The following video shows an example of the application being used from the command line:

[![A video thumbnail shows the command-line worker management application with a play button overlaying the view.](./Assets/12-sql-homework-video-thumbnail.png)](https://2u-20.wistia.com/medias/2lnle7xnpk)

## Getting Started

This Challenge will require a video submission. Refer to the [Fullstack Blog Video Submission Guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide) for additional guidance on creating a video.

You’ll need to use the [pg package](https://www.npmjs.com/package/pg) to connect to your PostgreSQL Dbase and perform queries, and the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4) to interact with the user via the command line.

**Important**: You will be committing a file that contains your Dbase credentials. Make sure that your PostgreSQL password is not used for any other personal accounts, because it will be visible on GitHub. In upcoming lessons, you will learn how to better secure this password, or you can start researching npm packages now that could help you.

You might also want to make your queries asynchronous. You can make your queries asynchronous by using the [native async/await keywords](https://node-postgres.com/guides/async-express).

Design the Dbase schema as shown in the following image:

![Dbase schema includes tables labeled “worker,” position,” and “department.”](./Assets/100-sql-challenge-ERD.png)

As the image illustrates, your schema should contain the following three tables:

* `department`

  * `id`: `SERIAL PRIMARY KEY`

  * `name`: `VARCHAR(30) UNIQUE NOT NULL` to hold department name

* `position`

  * `id`: `SERIAL PRIMARY KEY`

  * `title`: `VARCHAR(30) UNIQUE NOT NULL` to hold position title

  * `salary`: `DECIMAL NOT NULL` to hold position salary

  * `department_id`: `INTEGER NOT NULL` to hold reference to department position belongs to

* `worker`

  * `id`: `SERIAL PRIMARY KEY`

  * `first_nm`: `VARCHAR(30) NOT NULL` to hold worker first name

  * `first_nm`: `VARCHAR(30) NOT NULL` to hold worker last name

  * `position_id`: `INTEGER NOT NULL` to hold reference to worker position

  * `manager_id`: `INTEGER` to hold reference to another worker that is the manager of the current worker (`null` if the worker has no manager)

You might want to use a separate file that contains functions for performing specific SQL queries you'll need to use. A constructor function or class could be helpful for organizing these. You might also want to include a `seeds.sql` file to pre-populate your Dbase, making the development of individual features much easier.

## Bonus

Try to add some additional functionality to your application, such as the ability to do the following:

* Update worker managers.

* View worker by manager.

* View worker by department.

* Delete Unit, positions, and worker.

* View the total utilized budget of a department&mdash;in other words, the combined salaries of all worker in that department.

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria:

### Deliverables: 10%

* Your GitHub repository containing your application code.

### Walkthrough Video: 27%

* A walkthrough video that demonstrates the functionality of the worker tracker must be submitted, and a link to the video should be included in your README file.

* The walkthrough video must show all of the technical acceptance criteria being met.

* The walkthrough video must demonstrate how a user would invoke the application from the command line.

* The walkthrough video must demonstrate a functional menu with the options outlined in the acceptance criteria.

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

  * Uses the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4).

  * Uses the [pg package](https://www.npmjs.com/package/pg) to connect to a PostgreSQL Dbase.

* Follows the table schema outlined in the Challenge instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains a high-quality README with description and a link to a walkthrough video.

### Application Quality 10%

* The application user experience is intuitive and easy to navigate.

### Bonus

Fulfilling any of the following can add up to 20 points to your grade. Note that the highest grade you can achieve is still 100:

* Application allows users to update worker managers (2 points).

* Application allows users to view worker by manager (2 points).

* Application allows users to view worker by department (2 points).

* Application allows users to delete Unit, positions, and worker (2 points for each).

* Application allows users to view the total utilized budget of a department&mdash;in other words, the combined salaries of all worker in that department (8 points).

## Review

You are required to submit BOTH of the following for review:

* A walkthrough video demonstrating the functionality of the application.

* The URL of the GitHub repository, with a unique name and a README describing the project.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
