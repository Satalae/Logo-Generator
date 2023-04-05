//Pulling in the tools
const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');
//const colorCheck = require('./lib/colors.js');

//Global Variables
const shapeOptions = ['Circle', 'Triangle', 'Square'];

//Global Function
// function colorCheck(givenColor) {
//     console.log(givenColor);
//     var colorChecker = new Option().style;
//     colorChecker.color = givenColor;
//     return colorChecker.color == givenColor;
// }
    
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
            // validate: (answer) => {
            //     //Checks if the number is a hex.
            //     if(!answer.match(/^#[0-9A-Fa-f]{6}/g) && answer.length != (6 || 7)) {
            //         const colorResult = CSS.supports('color', answer);

            //         //Quick check if its a color
            //         if(colorResult){
            //             //Valid CSS Color Return
            //             return true;
            //         }
            //         return "Please return a valid CSS color or HEX color code."
            //     }

            //     //Valid Hex Return
            //     return true;
            // },
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
            message: '\n Which colour would you like the shape to be? \n (Input either name or hexidecimal value)',
            // validate: (answer) => {
            //     //Checks if the number is a hex.
            //     if(!answer.match(/^#[0-9A-Fa-f]{6}/g) && answer.length != (6 || 7)) {
            //         const answerCheck = new Option().style;
                    
            //         if(answerCheck.color == answer.toLowerCase()){
            //             //Valid CSS Color Return
            //             return true;
            //         }
            //         return "Please return a valid CSS color or HEX color code.";
            //     }

            //     //Valid Hex Return
            //     return true;               
            // },
        }
    ])
    .then(({logoTitle, textColor, shapeOption, shapeColor}) => {
        //Used to contain the shape type chosen
        let chosenShape;

        //Adds # if the input # is a hex
        //Do both separately in case some comedian thinks its funny to use
        //base css and hex
        // if(textColor.charAt(0) !== '#'){
        //     const colorCheck = new Option().style;
        //     if(colorCheck !== textColor){
        //         textColor = '#' + textColor;
        //     }
        // }

        // if(shapeColor.charAt(0) !== '#'){
        //     const colorCheck = new Option().style;
        //     if(colorCheck !== shapeColor){
        //         shapeColor = '#' + shapeColor;
        //     }
        // }

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
        fs.writeFile(`logo.svg`, genSVG, (err) => {
            err ? console.error(err) : console.log('SVG Successfully generated! Check your local files where this was run.')
        })
    })