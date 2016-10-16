var chai = require("chai");

var expect = chai.expect;
var assert = chai.assert;
var calculator = require ("../calculator")

describe('String Calculator', function(){
    it('should start', function(done){
          assert.equal(calculator.calc(), true, 'should start');
          done();
    })

  }
)
