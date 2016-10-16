var chai = require("chai");

var expect = chai.expect;
var assert = chai.assert;
var calculator = require ("../calculator")

describe('String Calculator', function(){
    it('should take string numbers and return them', function(done) {
      let numbers = '1';
      assert.equal(calculator.add(numbers), "1", 'should take string numbers and return them');
      done();
    })

    it('should take multiple string numbers and add them', function(done) {
      let numbers = '1,2';
      assert.equal(calculator.add(numbers), 3, 'should take multiple string numbers and add them');
      done();
    })

    it('should allow for new lines to seperate numbers as well as commas', function(done) {
      let numbers = "1\n2,3";
      assert.equal(calculator.add(numbers), 6, 'should allow for new lines to seperate numbers as well as commas');
      done();
    })

  }
)
