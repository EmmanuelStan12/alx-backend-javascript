const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  describe('type == "SUM"', function() {
    it('equal positive numbers', function() {
      expect(calculateNumber('SUM', 2.0, 2.0)).to.equal(4);
    });

    it('equal positive numbers (alternate)', function() {
      expect(calculateNumber('SUM', 2.3, 1.8)).to.equal(4);
    });

    it('equal negative numbers', function() {
      expect(calculateNumber('SUM', -2.0, -2.0)).to.equal(-4);
    });

    it('equal negative numbers (alternate)', function() {
      expect(calculateNumber('SUM', -2.3, -1.8)).to.equal(-4);
    });

    it('negative and positive numbers', function() {
      expect(calculateNumber('SUM', -2.0, 2.0)).to.equal(0);
    });

    it('positive and negative numbers', function() {
      expect(calculateNumber('SUM', 2.0, -2.0)).to.equal(0);
    });

    it('0 and 0', function() {
      expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('type == "SUBTRACT"', function() {
    it('equal positive numbers', function() {
      expect(calculateNumber('SUBTRACT', 2.0, 2.0)).to.equal(0);
    });

    it('equal positive numbers (alternate)', function() {
      expect(calculateNumber('SUBTRACT', 2.3, 1.8)).to.equal(0);
    });

    it('equal negative numbers', function() {
      expect(calculateNumber('SUBTRACT', -2.0, -2.0)).to.equal(0);
    });

    it('equal negative numbers (alternate)', function() {
      expect(calculateNumber('SUBTRACT', -2.3, -1.8)).to.equal(0);
    });

    it('negative and positive numbers', function() {
      expect(calculateNumber('SUBTRACT', -2.0, 2.0)).to.equal(-4.0);
    });

    it('positive and negative numbers', function() {
      expect(calculateNumber('SUBTRACT', 2.0, -2.0)).to.equal(4.0);
    });

    it('0 and 0', function() {
      expect(calculateNumber('SUBTRACT', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('type == "DIVIDE"', function() {
    it('positive numbers', function() {
      expect(calculateNumber('DIVIDE', 8.0, 2.0)).to.equal(4.0);
    });

    it('numbers with different signs', function() {
      expect(calculateNumber('DIVIDE', -7.0, 2.0)).to.equal(-3.5);
    });

    it('numbers with different signs (alternate)', function() {
      expect(calculateNumber('DIVIDE', 7.0, -2.0)).to.equal(-3.5);
    });

    it('negative numbers', function() {
      expect(calculateNumber('DIVIDE', -7.0, -2.0)).to.equal(3.5);
    });

    it('equal positive numbers', function() {
      expect(calculateNumber('DIVIDE', 2.0, 2.0)).to.equal(1);
    });

    it('equal negative numbers', function() {
      expect(calculateNumber('DIVIDE', -2.0, -2.0)).to.equal(1);
    });

    it('equal rounded up numbers', function() {
      expect(calculateNumber('DIVIDE', 2.6, 3.0)).to.equal(1);
    });

    it('equal rounded down numbers', function() {
      expect(calculateNumber('DIVIDE', 2.4, 2.0)).to.equal(1);
    });

    it('0 and positive number', function() {
      expect(calculateNumber('DIVIDE', 0.0, 5.0)).to.equal(0);
    });

    it('0 and negative number', function() {
      expect(calculateNumber('DIVIDE', 0.0, -5.0)).to.equal(-0);
    });

    it('positive number and 0', function() {
      expect(calculateNumber('DIVIDE', 5.0, 0)).to.equal('Error');
    });

    it('positive number and number rounded down to 0', function() {
      expect(calculateNumber('DIVIDE', 5.0, 0.2)).to.equal('Error');
    });

    it('positive number and number rounded up to 0', function() {
      expect(calculateNumber('DIVIDE', 5.0, -0.2)).to.equal('Error');
    });

    it('negative number and 0', function() {
      expect(calculateNumber('DIVIDE', -5.0, 0)).to.equal('Error');
    });

    it('negative number and number rounded down to zero', function() {
      expect(calculateNumber('DIVIDE', -5.0, 0.2)).to.equal('Error');
    });

    it('negative number and number rounded up to zero', function() {
      expect(calculateNumber('DIVIDE', -5.0, -0.2)).to.equal('Error');
    });

    it('0 and 0', function() {
      expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
    });
  });
});
