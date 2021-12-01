const assert = require('assert');
const { sub } = require('../src/sub');

// Tenhle kód testuje tvojí funkci, zda doopravdy správně sčítá.
describe('Rozdíl dvou čísel', () => {
    it('1 - 2 = -1', () => {
        assert.equal(sub(1, 2), -1);
    })

    it('10 - 12 = -2', () => {
        assert.equal(sub(10, 12), -2);
    })

    it('-1 - -2 = 1', () => {
        assert.equal(sub(-1, -2), 1);
    })
})
