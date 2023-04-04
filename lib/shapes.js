//Base Shape
class Shape {
    constructor(text, textColor, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

//Specific Shape Classes
class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);

        this.render = function () {
            return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
                <polygon points="150 5, 295 180, 5 180" fill="${shapeColor}"/>
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}"> ${text} </text>
            </svg>`;
        };
    }
}

class Circle extends Shape{
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);

        this.render = function () {
            return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
                <circle cx="150" cy="100" r="80" fill="${shapeColor}"> </circle>
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}"> ${text} </text>
            </svg>`;
        };
    }
} 
class Square extends Shape{
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);

        this.render = function () {
            return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
                <rect x="75" y="25" width="150" height="150" fill="${shapeColor}"> </rect>
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}"> ${text} </text>
            </svg>`;
        };
    }
}

//Exporting the shapes
module.exports = {
    Triangle : Triangle,
    Circle : Circle,
    Square : Square
};