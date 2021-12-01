const assert = require('assert');
const { sum } = require('../src/sum');

// Tenhle kód testuje tvojí funkci, zda doopravdy správně sčítá.
describe('Součet svou čísel', () => {
    it('1 + 2 = 3', () => {
        assert.equal(sum(1, 2), 3);
    })

    it('10 + 12 = 22', () => {
        assert.equal(sum(10, 12), 22);
    })

    it('-1 + -2 = -3', () => {
        assert.equal(sum(-1, -2), -3);
    })

    it('"3" + 3 = 6', () => {
        assert.equal(sum("3", 3), 6);
    })

    it('"10" + 10 = 20', () => {
        assert.equal(sum("10", 10), 20);
    })
})
