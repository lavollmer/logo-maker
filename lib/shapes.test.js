// Constructor Shape is imported.
const Shape = require('../shapes.js');
const Validate = require(".../validate");

//for human beings only - brief statement about what we are testing now --> then create callback func
//jest does not care what we do here

//check that the shape is correct
describe("Validate Package Test", () => {
  describe("Shape method", () => {
    it("should return true when a shape is provided", () => {
      //get data ready 
      const validate = new Shape()
      const shape = "Triangle"
      expect(validate.Shape(Shape))).toBeTruthy();
    it("should return true when a shape is provided", () => {
      //get data ready 
      const validate = new Validate()
      const pw = ""
      expect(validate.isPassword(Shape)).toBeFalsy();