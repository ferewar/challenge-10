const { Triangle } = require('./shapes');

test('Triangle render method returns correct SVG string', () => {
    const shape = new Triangle("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});
const { Circle } = require('./shapes');

describe('Circle', () => {
  test('render method returns correct SVG string for Circle', () => {
    const shape = new Circle("red");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
  });
});
const { Square } = require('./shapes');

describe('Square', () => {
  test('render method returns correct SVG string for Square', () => {
    const shape = new Square("green");
    expect(shape.render()).toEqual('<rect width="200" height="200" fill="green" />');
  });
});