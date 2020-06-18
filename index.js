const inquirer = require("inquirer");

function askInquirerBadgeQuestions( pCurrentInquirerAnswers ){
    return pCurrentInquirerAnswers.createBadge;
}

const gQuestions = [
    // See inquirer question options documentation at
    // https://github.com/SBoudrias/Inquirer.js#question

    {
        type: "input",
        name: "projectTitle",
        message: "What's your project title?",
        // The default value if none is provided, it will appear in gray next to
        // the question
        default: "My New Project"
    },
    // SECTION shields.io Badge Questions
    // In the documentation at http://shields.io, you can create your own badge
    // using an url like the following:
    //
    // https://img.shields.io/badge/<LABEL>-<VALUE>-<COLOR>
    //
    // where <LABEL> will show with a gray background, and <VALUE> will show
    // with a <COLOR> background
    {
        type: "confirm",
        name: "createBadge",
        message: "Do you want to create a shields.io badge for your readme?",
        // The default value if none is provided, it will appear in gray next to
        // the question
        // Generate a badge by default
        default: true
    },
    {
        type: "input",
        name: "badgeLabel",
        message: "What should the badge label say?",
        // The default value if none is provided, it will appear in gray next to
        // the question
        default: "version",
        // A boolean or a function that receives the current answers and returns
        // a either true or false to decide wether to ask this question or not
        when: askInquirerBadgeQuestions
    },
    {
        type: "input",
        name: "badgeValue",
        message: "What should the badge value say?",
        // The default value if none is provided, it will appear in gray next to
        // the question
        default: "1.0.0",
        // A boolean or a function that receives the current answers and returns
        // a either true or false to decide wether to ask this question or not
        when: askInquirerBadgeQuestions
    },
    {
        type: "list",
        name: "badgeColor",
        message: "What color should the badge be?",
        when: askInquirerBadgeQuestions,
        choices: [
            "blue",
            "green",
            "yellow",
            "red"
        ],
        default: "blue"
    },
    // !SECTION shields.io Badge Questions
    {
        type: "input",
        name: "projectDescription",
        message: "What's the project's description?",
        // The default value if none is provided, it will appear in gray next to
        // the question
        // This will appear as a task in the README.md
        default: "- [ ] TODO"
    },
    // SECTION Document Sections
    {
        type: "input",
        name: "projectInstallation",
        message: "How can the project be installed?",
        // The default value if none is provided, it will appear in gray next to
        // the question
        // This will appear as a task in the README.md
        default: "- [ ] TODO"
    },
    {
        type: "input",
        name: "projectUsage",
        message: "How can someone use the project?",
        // The default value if none is provided, it will appear in gray next to
        // the question
        // This will appear as a task in the README.md
        default: "- [ ] TODO"
    },
    {
        type: "input",
        name: "projectLicense",
        message: "What is the project's license?",
        // The default value if none is provided, it will appear in gray next to
        // the question
        // This will appear as a task in the README.md
        default: "- [ ] TODO"
    },
    {
        type: "input",
        name: "projectContributing",
        message: "How can others contribute to this project?",
        // The default value if none is provided, it will appear in gray next to
        // the question
        // This will appear as a task in the README.md
        default: "- [ ] TODO"
    },
    {
        type: "input",
        name: "projectTests",
        message: "How can someone run the tests for this project?",
        // The default value if none is provided, it will appear in gray next to
        // the question
        // This will appear as a task in the README.md
        default: "- [ ] TODO"
    },
    // The two questions below will be used to generate the Questions section
    // According to https://stackoverflow.com/a/36380674, the user's avatar
    // image can be obtained from their GitHub username using their GitHub
    // username as seen below
    //
    // https://github.com/<GITHUB_USERNAME>.png[?size=<SIDE_SIZE_INTEGER>]
    //
    // Note that the size parameter above is optional and if provided, the value
    // should be an integer
    {
        type: "input",
        name: "projectGithubUsername",
        message: "What's your GitHub username?"
    },
    {
        type: "input",
        name: "projectGithubEmail",
        message: "What's your GitHub account's e-mail?"
    }
    // !SECTION Document Sections
];

function writeToFile( pFileName, pData ) {
}

function init() {
    inquirer
        .prompt( gQuestions )
        .then( function( pValue ){
            console.log( pValue );
        } );
}

init();
