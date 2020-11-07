const { logMock } = require("../index");
const {
  bubbleSort,
  insertSort,
  mergeSort,
  quickSort
} = require("../../003_algorithm/003_sort");

const origin = console.log;
afterEach(() => (console.log = origin));

const testcase = [
  [() => [], []],
  [() => [0, -1], [-1, 0]],
  [() => [1, 3, 1], [1, 1, 3]],
  [() => [1, 1, 1], [1, 1, 1]],
  [
    () => [1, 43, 12, 31, 53, 5, 33, 63, 34, 54, 6, 67, 88, 32, 42],
    [1, 5, 6, 12, 31, 32, 33, 34, 42, 43, 53, 54, 63, 67, 88]
  ]
];

describe("bubbleSort", () => {
  test("normal", () => {
    testcase.forEach(([getList, ans]) => {
      const res = bubbleSort(getList());
      res.forEach((item, index) => {
        expect(item).toEqual(ans[index]);
      });
    })
  });
});

describe("insertSort", () => {
  test("normal", () => {
    testcase.forEach(([getList, ans]) => {
      const res = insertSort(getList());
      res.forEach((item, index) => {
        expect(item).toEqual(ans[index]);
      });
    })
  })
});

describe("mergeSort", () => {
  test("normal", () => {
    testcase.forEach(([getList, ans]) => {
      const res = mergeSort(getList());
      res.forEach((item, index) => {
        expect(item).toEqual(ans[index]);
      });
    })
  });
});

describe("quickSort", () => {
  test("normal", () => {
    testcase.forEach(([getList, ans]) => {
      const res = quickSort(getList());
      res.forEach((item, index) => {
        expect(item).toEqual(ans[index]);
      });
    })
  });
});