const swithorder = require("./swithorder");
test("=", () => {
  expect(
    swithorder(
      [
        { id: 10, order: 0 },
        { id: 12, order: 1 },
        { id: 9, order: 2 },
        { id: 3, order: 3 },
      ],
      10,
      3
    )
  ).toEqual([
    { id: 3, order: 0 },
    { id: 12, order: 1 },
    { id: 9, order: 2 },
    { id: 10, order: 3 },
  ]);
});
test("=", () => {
  expect(
    swithorder(
      [
        { id: 10, order: 0 },
        { id: 12, order: 1 },
        { id: 9, order: 2 },
        { id: 3, order: 3 },
      ],
      10,
      3
    )
  ).toEqual([
    { id: 3, order: 0 },
    { id: 12, order: 1 },
    { id: 9, order: 2 },
    { id: 10, order: 3 },
  ]);
});
test("=", () => {
  expect(
    swithorder(
      [
        { id: 10, order: 0 },
        { id: 12, order: 1 },
        { id: 9, order: 2 },
        { id: 3, order: 3 },
      ],
      10,
      3
    )
  ).toEqual([
    { id: 3, order: 0 },
    { id: 12, order: 1 },
    { id: 9, order: 2 },
    { id: 10, order: 3 },
  ]);
});
test("=", () => {
  expect(
    swithorder(
      [
        { id: 10, order: 0 },
        { id: 12, order: 1 },
        { id: 9, order: 2 },
        { id: 3, order: 3 },
      ],
      10,
      3
    )
  ).toEqual([
    { id: 3, order: 0 },
    { id: 12, order: 1 },
    { id: 9, order: 2 },
    { id: 10, order: 3 },
  ]);
});

