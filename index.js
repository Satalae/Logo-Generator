//Pulling in the tools
const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');

//Global Variables
const shapeOptions = ['Circle', 'Triangle', 'Square'];
    
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
            //validate: (answer) => {
                //if(actually a color)
                //else() do it again
            //},
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
    .then(({logoTitle, textColor, shapeOption, shapeColor}) => {
        let chosenShape;

        //Checks and creates the given shape
        switch(shapeOption){
            case 'Circle':
                chosenShape = new shapes.Circle(logoTitle, textColor, shapeColor);
                console.log('Circle Selected \n');
                break;
            case 'Triangle':
                chosenShape = new shapes.Triangle(logoTitle, textColor, shapeColor);
                console.log('Triangle Selected \n');
                break;
            case 'Square':
                chosenShape = new shapes.Square(logoTitle, textColor, shapeColor);
                console.log('Square Selected \n');
                break;
        }

        const genSVG = chosenShape.render();
        
        //Creates file with parameters given by the class object
        fs.writeFile(`GeneratedLogo.svg`, genSVG, (err) => {
            err ? console.error(err) : console.log('SVG Successfully generated! Check your local files where this was run.')
        })
    })