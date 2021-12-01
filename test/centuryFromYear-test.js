const assert = require('assert');
const { centuryFromYear } = require('../src/centuryFromYear');

// Tenhle kód testuje tvojí funkci, zda doopravdy správně sčítá.
describe('Století podle roku', () => {
    const datasets = {
        1905: 20,
        1700: 17,
        1988: 20,
        374: 4,
        8: 1
    }

    Object.keys(datasets).forEach(year => {
        const century = datasets[year];

        it(`Rok ${year} má ${century}. století`, () => {
            assert.equal(centuryFromYear(year), century);
        })
    });
})
