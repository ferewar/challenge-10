const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Function to prompt user for inputs
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo text:',
            validate: input => {
                // Validate input is <= 3 characters
                if (input.length > 3) {
                    return 'Text must be up to three characters.';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (keyword or hexadecimal):',
            default: 'black' // Default color
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for the logo:',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (keyword or hexadecimal):',
            default: 'blue' // Default color
        }
    ]);
}

// Function to generate SVG content
function generateSVG({ text, textColor, shape, shapeColor }) {
    let shapeInstance;

    switch (shape) {
        case 'Circle':
            shapeInstance = new Circle(shapeColor);
            break;
        case 'Triangle':
            shapeInstance = new Triangle(shapeColor);
            break;
        case 'Square':
            shapeInstance = new Square(shapeColor);
            break;
    }

    // SVG template
    const svgContent = `<?xml version="1.0" standalone="no"?>
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeInstance.render()}
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="40">${text}</text>
</svg>`;

    return svgContent;
}

// Main function to run the application
async function run() {
    try {
        const answers = await promptUser();
        const svgContent = generateSVG(answers);
        fs.writeFileSync('logo.svg', svgContent);
        console.log('Generated logo.svg');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

run();
