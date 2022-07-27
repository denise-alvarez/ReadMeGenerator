//Packages needed for this application
const inq = require("inquirer");
const fs = require("fs");
const chalk = require("chalk");

// Questions to ask the user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    default: "ReadMeGenerator",
  },
  {
    type: "input",
    name: "description",
    message: "What is your project all about?",
    default: "The projects helps the user easily create a ReadMe file",
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install your project?",
    default:
      "The application is installed by copying the repository to the users system, installing inquirer, then running node index.js",
  },
  {
    type: "input",
    name: "usage",
    message: "What is your application used for?",
    default: "The application is used for creating ReadMe file for the user",
  },
  {
    type: "checkbox",
    name: "license",
    message: "What kind of license is used?",
    choices: ["BSD", "MIT", "GPL", "None"],
    default: "MIT",
  },
  {
    type: "input",
    name: "contribute",
    message: "What are the guidelines to contributing?",
    default: "None",
  },
  {
    type: "input",
    name: "deployedLink",
    message: "What is the link to your deployed project?",
    default: "https://github.com/denise-alvarez/ReadMeGenerator.git",
  },
  {
    type: "input",
    name: "githubusername",
    message: "What is your GitHub username?",
    default: "denise-alvarez",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    default: "d.alvarez@icloud.com",
  }
]

//promt default answers

//prompt(questions).then((response) => console.log(response));

//function for the questions
function createReadme(answers) {
  fs.writeFileSync('./READMEgenerated.md',`
# ${answers.title}
## Description
${answers.description}
## Installation instructions
${answers.installation}
## Usage information
${answers.usage}
## License Used
${answers.license}
## Contributions guidelines
${answers.contribute}
## Deployed Link
${answers.deployedLink}
## Github Username
${answers.githubusername}
## Email
${answers.email}
  `)
}

//funtion toinitialize app
inq
  .prompt(questions)
  .then((answers) => {
    createReadme(answers)
    console.log(chalk.green("😍 Successfully created README.md"))
})

  .catch((error) => {
    if (error.isTtyError) {
      console.error("😭 Prompts could not be rendered in current environment!")
    } else {
      console.error(`Something went wrong!`, error)
    }
});

