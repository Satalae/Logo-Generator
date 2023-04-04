//Pulling in the tools
const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');

//Global Variables
const shapeOptions = ['Circle', 'Triangle', 'Square'];

//The guy
const generateSVG = ({logo, logoColor, shape, shapeColor}) =>
    console.log(`${logo}, ${logoColor}, ${shape}, ${shapeColor}`);

inquirer
    .prompt([
        {
            name: 'logoTitle',
            type: 'input',
            message: 'What are the three characters you want displayed?',
            //Checks to see if the person actually put in a 3 char logo
            validate: (answer) => {
                if(answer.length != 3){
                    return "Please enter a logo that is only three characters.";
                }
                return true;
            },
        },
        {
            name: 'textColor',
            type: 'input',
            message: '\n What colour would you like the text to be? \n (Input either name or hexidecimal value)',
        },
        {
            name: 'shapeOption',
            type: 'list',
            message: '\n Which shape would you like to decorate your logo with?',
            choices: shapeOptions,
        },
        {
            name: 'shapeColor',
            type: 'input',
            message: '\n Which colour would you like the shape to be? \n (Input either name or hexidecimal value)'
        }
    ])
    .then((answers) => {
        var logo = answers.logoTitle;
        var logoColor = answers.textColor;
        var shape = answers.shapeOption;
        var shapeColor = answers.shapeColor;

        generateSVG(logo, logoColor, shape, shapeColor);
    })