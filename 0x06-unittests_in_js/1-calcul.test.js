const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('type == "SUM"', function() {
    it('equal positive numbers', function() {
      assert.strictEqual(calculateNumber('SUM', 2.0, 2.0), 4);
    });

    it('equal positive numbers (alternate)', function() {
      assert.strictEqual(calculateNumber('SUM', 2.3, 1.8), 4);
    });

    it('equal negative numbers', function() {
      assert.strictEqual(calculateNumber('SUM', -2.0, -2.0), -4);
    });

    it('equal negative numbers (alternate)', function() {
      assert.strictEqual(calculateNumber('SUM', -2.3, -1.8), -4);
    });

    it('negative and positive numbers', function() {
      assert.strictEqual(calculateNumber('SUM', -2.0, 2.0), 0);
    });

    it('positive and negative numbers', function() {
      assert.strictEqual(calculateNumber('SUM', 2.0, -2.0), 0);
    });

    it('0 and 0', function() {
      assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
    });
  });

  describe('type == "SUBTRACT"', function() {
    it('equal positive numbers', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 2.0), 0);
    });

    it('equal positive numbers (alternate)', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 1.8), 0);
    });

    it('equal negative numbers', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, -2.0), 0);
    });

    it('equal negative numbers (alternate)', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.3, -1.8), 0);
    });

    it('negative and positive numbers', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, 2.0), -4.0);
    });

    it('positive and negative numbers', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, -2.0), 4.0);
    });

    it('0 and 0', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
    });
  });

  describe('type == "DIVIDE"', function() {
    it('positive numbers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 8.0, 2.0), 4.0);
    });

    it('numbers with different signs', function() {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, 2.0), -3.5);
    });

    it('numbers with different signs (alternate)', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 7.0, -2.0), -3.5);
    });

    it('negative numbers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, -2.0), 3.5);
    });

    it('equal positive numbers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 2.0, 2.0), 1);
    });

    it('equal negative numbers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', -2.0, -2.0), 1);
    });

    it('equal rounded up numbers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 2.6, 3.0), 1);
    });

    it('equal rounded down numbers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 2.4, 2.0), 1);
    });

    it('0 and positive number', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 5.0), 0);
    });

    it('0 and negative number', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, -5.0), -0);
    });

    it('positive number and 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0), 'Error');
    });

    it('positive number and number rounded down to 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.2), 'Error');
    });

    it('positive number and number rounded up to 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, -0.2), 'Error');
    });

    it('negative number and 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0), 'Error');
    });

    it('negative number and number rounded down to zero', function() {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0.2), 'Error');
    });

    it('negative number and number rounded up to zero', function() {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, -0.2), 'Error');
    });

    it('0 and 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });
  });
});
