const chuck = require("./chuck")
test("=", () => {
  expect(chuck([1,2,3,4,5],3)).toEqual([ [ 1, 2, 3 ], [ 4, 5 ] ]);
});
test("=", () => {
    expect(chuck([1,2,3,4,5],2)).toEqual([ [ 1, 2], [ 3,4 ],[5] ]);
  });
  test("=", () => {
    expect(chuck([1,2,3,4,5],2)).toEqual([ [ 1, 2], [ 3,4 ],[5] ]);
  });
  test("=", () => {
    expect(chuck([1,2,3,3,5,3,6,7],3)).toEqual([ [ 1, 2, 3 ], [ 3, 5, 3 ], [ 6, 7 ] ]);
  });
  test("=", () => {
    expect(chuck([1,2,3,4,5],3)).toEqual([ [ 1, 2, 3 ], [ 4, 5 ] ]);
  });
