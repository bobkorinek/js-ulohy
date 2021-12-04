const assert = require("assert");
const { adjacentElementsProduct } = require("../src/adjacentElementsProduct");

describe("Největší násobek sousedících čísel", () => {
  const datasets = [
    {
      numbers: [3, 6, -2, -5, 7, 3],
      result: 21,
    },
    {
      numbers: [-1, -2],
      result: 2,
    },
    {
      numbers: [5, 1, 2, 3, 1, 4],
      result: 6,
    },
    {
      numbers: [1, 2, 3, 0],
      result: 6,
    },
    {
      numbers: [9, 5, 10, 2, 24, -1, -48],
      result: 50,
    },
    {
      numbers: [5, 6, -4, 2, 3, 2, -23],
      result: 30,
    },
  ];

  datasets.forEach((dataset) => {
    it(`Pro čísla [${dataset.numbers.join(", ")}] je největší součin ${
      dataset.result
    }`, () => {
      assert.equal(adjacentElementsProduct(dataset.numbers), dataset.result);
    });
  });
});
