import makeMatrix from "../index";

// Test the throwing of a TypeError if a non-integer is passed in `dimensions`
test("Array error test - When non-integer is used", () => {
    expect(() => makeMatrix([1, 0.2, 3])).toThrow(TypeError);
});

test("Number error test - When non-integer is used", () => {
    expect(() => makeMatrix(0.2)).toThrow(TypeError);
});
