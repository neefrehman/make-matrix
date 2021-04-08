import makeMatrix from "../index";

// Test arrays of specific dimensions, with callbacks returning "self aware" initialised values
test("vector callback test - straight", () => {
    expect(makeMatrix([2, 2, 2], vector => vector)).toMatchSnapshot();
});

test("vector callback test - joined", () => {
    expect(
        makeMatrix([2, 2, 2, 1], vector => `my position is ${vector.join()}`)
    ).toMatchSnapshot();
});

test("vector callback test - joined", () => {
    expect(
        makeMatrix([3, 3, 3], ([x, y, z]) => {
            return {
                x,
                y,
                z
            };
        })
    ).toMatchSnapshot();
});
