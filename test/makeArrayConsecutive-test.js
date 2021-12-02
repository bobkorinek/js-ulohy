const assert = require('assert');
const { makeArrayConsecutive } = require('../src/makeArrayConsecutive');

// Tenhle kód testuje tvojí funkci, zda doopravdy správně sčítá.
describe('Počet přechodů pro po sobě jdoucí seznam', () => {
    const datasets = [
        {
            numbers: [6, 2, 3, 8],
            result: 3
        },
        {
            numbers: [0, 3],
            result: 2
        },
        {
            numbers: [6, 3],
            result: 2
        },
        {
            numbers: [1],
            result: 0
        }
    ]

    datasets.forEach(dataset => {
        it(`Pro seznam [${dataset.numbers.join(', ')}] je zapotřebí celkem přechodů: ${dataset.result}`, () => {
            assert.equal(makeArrayConsecutive(dataset.numbers), dataset.result);
        })
    });
})
