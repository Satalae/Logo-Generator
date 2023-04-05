const shapes = require('./shapes.js');

describe('Shape Construction', () => {
    describe('Triangle', () => {
        it('Should generate a svg with polygon svg generation.', () => {
            const triangle = new shapes.Triangle('dog', 'white', 'red');

            expect(triangle.render()).toBe(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
                <polygon points="150 5, 295 180, 5 180" fill="red"/>
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="white"> dog </text>
            </svg>`)
        })
    })
    describe('Circle', () => {
        it('Should generate a svg with circle svg generation.', () => {
            const circle = new shapes.Circle('dog', 'white', 'red');

            expect(circle.render()).toBe(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
                <circle cx="150" cy="100" r="80" fill="red"> </circle>
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="white"> dog </text>
            </svg>`)
        })
    })
    describe('Square', () => {
        it('Should generate a svg with rect svg generation.', () => {
            const square = new shapes.Square('dog', 'white', 'red');

            expect(square.render()).toBe(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
                <rect x="75" y="25" width="150" height="150" fill="red"> </rect>
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="white"> dog </text>
            </svg>`)
        })
    })
})