// Testing with Mocha

const assert = require('assert')

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([1,2,3].indexOf(4), -1)
    })
  })
})

const add = (a, b) => {
  return a + b
}

describe('add', () => {
  it('should add the two arguments together', () => {
    assert.equal(add(5, 7), 12)
  })
})

const doubleArray = (array) => {
  return arrayAfterDouble = array.map((current, index) => {
    if (typeof current == 'number') {
      return current * 2
    } else {
      return 'not a number'
    }
  })
}

describe('doubleArray', () => {
  it('should multiply all elements in the array by two', () => {
    assert.deepStrictEqual(doubleArray([1]), [2]) // assert.deepStrictEqual to compare arrays and objects
    assert.deepStrictEqual(doubleArray([1, 2, 3, 4]), [2, 4, 6, 8])
  })
})

describe('doubleArray', () => {
  it('should return "not a number" when array element values are not numbers', () => {
    assert.deepStrictEqual(doubleArray(['lol', 'hello', 10, 'was']), ['not a number', 'not a number', 20, 'not a number'])
  })
})