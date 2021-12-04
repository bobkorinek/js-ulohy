const assert = require("assert");
const { allLongestStrings } = require("../src/allLongestStrings");

describe("Nejdleší řetězce", () => {
  const datasets = [
    {
      input: ["aba", "aa", "ad", "vcd", "aba"],
      result: ["aba", "vcd", "aba"],
    },
    {
      input: ["aa"],
      result: ["aa"],
    },
    {
      input: ["abc", "eeee", "abcd", "dcd"],
      result: ["eeee", "abcd"],
    },
    {
      input: ["a", "abc", "cbd", "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"],
      result: ["zzzzzz", "abcdef", "aaaaaa"],
    },
    {
      input: ["enyky", "benyky", "yely", "varennyky"],
      result: ["varennyky"],
    },
    {
      input: ["abacaba", "abacab", "abac", "xxxxxx"],
      result: ["abacaba"],
    },
    {
      input: [
        "young",
        "yooooooung",
        "hot",
        "or",
        "not",
        "come",
        "on",
        "fire",
        "water",
        "watermelon",
      ],
      result: ["yooooooung", "watermelon"],
    },
  ];

  datasets.forEach((dataset) => {
    it(`Pro seznam ["${dataset.input.join(
      '", "'
    )}"] jsou nevjětší řetězce ["${dataset.result.join('", "')}"]`, () => {
      assert.deepEqual(allLongestStrings(dataset.input), dataset.result);
    });
  });
});
