var assert = require('chai').assert;
var bracketBalancer = require('./bracketBalancer');

describe('balanced', function () {

  it('should check bracket balance', function () {
    var string = '()'
    var balanced = new bracketBalancer(string);
    assert.isTrue(balanced.isBalanced());
  });

  it('should check bracket balance', function () {
    var string = '('
    var balanced = new bracketBalancer(string);
    assert.isFalse(balanced.isBalanced());
  });

  it('should check bracket balance', function () {
    var string = '(())'
    var balanced = new bracketBalancer(string);
    assert.isTrue(balanced.isBalanced());
  });

  it('should check bracket balance', function () {
    var string = ')('
    var balanced = new bracketBalancer(string);
    assert.isFalse(balanced.isBalanced());
  });

  it('should check bracket balance', function () {
    var string = '[](){}'
    var balanced = new bracketBalancer(string);
    assert.isTrue(balanced.isBalanced());
  });

  it('should check bracket balance', function () {
    var string = '[({})]'
    var balanced = new bracketBalancer(string);
    assert.isTrue(balanced.isBalanced());
  });

  it('should check bracket balance', function () {
    var string = '[(]{)}'
    var balanced = new bracketBalancer(string);
    assert.isFalse(balanced.isBalanced());
  });

  it('should check bracket balance', function () {
    var string = '][)(}{'
    var balanced = new bracketBalancer(string);
    assert.isFalse(balanced.isBalanced());
  });

});
