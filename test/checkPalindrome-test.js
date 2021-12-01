const assert = require('assert');
const { checkPalindrome } = require('../src/checkPalindrome');

// Tenhle kód testuje tvojí funkci, zda doopravdy správně sčítá.
describe('Kontrola palindromu', () => {
    const datasets = {
        "aabaa": true,
        "abac": false,
        "a": true,
        "az": false,
        "abacaba": true,
        "z": true,
        "aaabaaaa": false,
        "zzzazzazz": false,
        "hlbeeykoqqqqokyeeblh": true
    }

    Object.keys(datasets).forEach(input => {
        const isPalindrome = datasets[input];

        it(`Řetězec "${input}" ${isPalindrome ? 'je' : 'není'} palindromem`, () => {
            assert.equal(checkPalindrome(input), isPalindrome);
        })
    });
})
