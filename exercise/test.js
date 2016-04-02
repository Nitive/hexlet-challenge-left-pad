/* global require describe it */

const assert = require('assert');
const leftPad = require('./solution');

describe('left-pad', () => {
  it('should add zeros', () => {
    assert.equal(leftPad('123', 4), ' 123');
  });

  it('shoud not add zeros if string less then length', () => {
    assert.equal(leftPad('12345', 4), '12345');
  });

  it('shoud not add zeros if string length equal with given length', () => {
    assert.equal(leftPad('12345', 5), '12345');
  });

  it('shoud add zeros to empty string', () => {
    assert.equal(leftPad('', 5), '     ');
  });
});

