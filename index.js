// Imported to write the file
const fs = require( 'fs' );
const inquirer = require( 'inquirer' );
const generateMarkdown = require( './utils/generateMarkdown.js' );

function askInquirerBadgeQuestions( pCurrentInquirerAnswers ){
    return pCurrentInquirerAnswers.createBadge;
}

// SECTION Questions to ask
const gQuestions = [
    // See inquirer question options documentation at
    // https://github.com/SBoudrias/Inquirer.js#question

    {
        type: "input",
        name: "title",
        message: "What's your project title?",
        // The default value if none is provided, it will appear in gray next to
        // the question
        default: "My New Project"
    },
    // SECTION shields.io Badge Questions
    // ANCHOR: Generating a badge from shields.io
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
        name: "description",
        message: "What's the project's description?",
        // The default value if none is provided, it will appear in gray next to
        // the question
        // This will appear as a task in the README.md
        default: "- [ ] Describe the project"
    },
    // SECTION Document Sections
    {
        type: "input",
        name: "installation",
        message: "How can the project be installed?",
        // The default value if none is provided, it will appear in gray next to
        // the question
        // This will appear as a task in the README.md
        default: "- [ ] Describe the installation process"
    },
    {
        type: "input",
        name: "usage",
        message: "How can someone use the project?",
        // The default value if none is provided, it will appear in gray next to
        // the question
        // This will appear as a task in the README.md
        default: "- [ ] Describe how to use the project"
    },
    {
        type: "input",
        name: "license",
        message: "What is the project's license?",
        // The default value if none is provided, it will appear in gray next to
        // the question
        // This will appear as a task in the README.md
        default: "- [ ] Set the project's license"
    },
    {
        type: "input",
        name: "contributing",
        message: "How can others contribute to this project?",
        // The default value if none is provided, it will appear in gray next to
        // the question
        // This will appear as a task in the README.md
        default: "- [ ] Describe how to contribute"
    },
    {
        type: "input",
        name: "tests",
        message: "How can someone run the tests for this project?",
        // The default value if none is provided, it will appear in gray next to
        // the question
        // This will appear as a task in the README.md
        default: "- [ ] Describe how to run the tests"
    },
    // The two questions below will be used to generate the Questions section
    // ANCHOR: Obtain GitHub Avatars from Username
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
        name: "githubUsername",
        message: "What's your GitHub username?"
    },
    {
        type: "input",
        name: "githubEmail",
        message: "What's your GitHub account's e-mail?"
    }
    // !SECTION Document Sections
];
// !SECTION Questions to ask

// SECTION Write File
function writeToFile( pFileName, pData ) {
    fs.writeFile( pFileName, pData, 'utf8', function( pError ){
        if( pError ){
            throw pError;
        } else {
            console.log( `File "${ pFileName }" written successfully` );
        }
    } );
}
// !SECTION Write File

// SECTION Main Program Function
function init() {
    inquirer
        // Start the inquiry
        .prompt( gQuestions )
        // When the inquiry is done...
        .then( function( pValue ){
            // argv[ 0 ] is always node
            // argv[ 1 ] is the script's absolute path
            // argv[ 2 ] is the script's first argument/option
            var lFileName = process.argv[ 2 ];

            // If no name was given in the first argument then default to
            // README.md
            if ( !lFileName ){
                lFileName = 'README.md';
            }

            // !! Code to generate the markdown string is located at
            // !! ./utils/generateMarkdown.js
            writeToFile( lFileName, generateMarkdown( pValue ) );
        } );
}
// !SECTION Main Program Function

// ANCHOR: Program Execution
init();
