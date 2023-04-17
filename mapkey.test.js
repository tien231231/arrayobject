const mapkey = require("./mapkey");
test("=", () => {
  expect(
    mapkey(
      [
        { a: 1, b: 1, c: 2, d: 4, e: 5 },
        { a: 2, b: 1, c: 5, d: 4, e: 5 },
        { d: 4, e: 5, a: 22, b: 11, c: 51 },
      ],
      ["c", "b", "a"]
    )
  ).toEqual([
    { c: 2, b: 1, a: 1 },
    { c: 5, b: 1, a: 2 },
    { c: 51, b: 11, a: 22 },
  ]);
});

test("=", () => {
    expect(
      mapkey(
        [
          { a: 1, b: 1, c: 2, d: 4, e: 5 },
          { a: 2, b: 1, c: 5, d: 4, e: 5 },
          { d: 4, e: 5, a: 22, b: 11, c: 51 },
        ],
        ["c", "b", "a"]
      )
    ).toEqual([
      { c: 2, b: 1, a: 1 },
      { c: 5, b: 1, a: 2 },
      { c: 51, b: 11, a: 22 },
    ]);
  });

  
test("=", () => {
    expect(
      mapkey(
        [
          { a: 1, b: 1, c: 2, d: 4, e: 5 },
          { a: 2, b: 1, c: 5, d: 4, e: 5 },
          { d: 4, e: 5, a: 22, b: 11, c: 51 },
        ],
        ["c", "b", "a"]
      )
    ).toEqual([
      { c: 2, b: 1, a: 1 },
      { c: 5, b: 1, a: 2 },
      { c: 51, b: 11, a: 22 },
    ]);
  });
  
  
test("=", () => {
    expect(
      mapkey(
        [
          { a: 1, b: 1, c: 2, d: 4, e: 5 },
          { a: 2, b: 1, c: 5, d: 4, e: 5 },
          { d: 4, e: 5, a: 22, b: 11, c: 51 },
        ],
        ["c", "b", "a"]
      )
    ).toEqual([
      { c: 2, b: 1, a: 1 },
      { c: 5, b: 1, a: 2 },
      { c: 51, b: 11, a: 22 },
    ]);
  });
  
  
test("=", () => {
    expect(
      mapkey(
        [
          { a: 1, b: 1, c: 2, d: 4, e: 5 },
          { a: 2, b: 1, c: 5, d: 4, e: 5 },
          { d: 4, e: 5, a: 22, b: 11, c: 51 },
        ],
        ["c", "b", "a"]
      )
    ).toEqual([
      { c: 2, b: 1, a: 1 },
      { c: 5, b: 1, a: 2 },
      { c: 51, b: 11, a: 22 },
    ]);
  });
  
  
