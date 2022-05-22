const inq = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");

// Questions to ask the user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is your project all about?",
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is your application used for?",
  },
  {
    type: "checkbox",
    name: "license",
    message: "What kind of license is used?",
    choices: ["BSD", "MIT", "GPL"],
  },
  {
    type: "input",
    name: "contribute",
    message: "What are the guidelines to contributing?",
  },
  {
    type: "input",
    name: "deployedLink",
    message: "What is the link to your deployed project?",
  },
  {
    type: "input",
    name: "githubusername",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

function createReadme(answers) {
  fs.writeFileSync(
    "./README.md",
    `
    # ${answers.title}
    ## Project title
    ${answers.description}
    ## Description
    ${answers.installation}
    ## Installation Instructions
    ${answers.usage}
    ## Usage
    ${answers.license}
    ## License Used
    ${answers.contribute}
    ## Guideline Contributions
    ${answers.deployedLink}
    ## Deployed Link
    ${answers.githubusername}
    ## Github Username
    ${answers.email}
    ## Email
  `
  );
}

inq
  .prompt(questions)
  .then((answers) => {
    createReadme(answers);
    console.log(chalk.green("😍 Successfully created README.md"));
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("😭 Prompts could not be rendered in current environment!");
    } else {
      console.error(`Something went wrong!`, error);
    }
  });
