const assert = require('assert');
const { sqr } = require('../src/sqr');

describe('Druhá mocnina dvou čísel', () => {
    it('Mocnina 4 je 16', () => {
        assert.equal(sqr(4), 16);
    })

    it('Mocnina 10 je 100', () => {
        assert.equal(sqr(10), 100);
    })

    it('Mocnina 8 je 64', () => {
        assert.equal(sqr(8), 64);
    })
})
