import makeMatrix from "../index";

// Test arrays of specific dimensions, without any initialised values
test("length: 1 test - No initialValues", () => {
    expect(makeMatrix([1])).toMatchSnapshot();
});

test("length: 2 test - No initialValues", () => {
    expect(makeMatrix([2])).toMatchSnapshot();
});

test("length: 7 test - No initialValues", () => {
    expect(makeMatrix([7])).toMatchSnapshot();
});

test("1x1 test - No initialValues", () => {
    expect(makeMatrix([1, 1])).toMatchSnapshot();
});

test("1x4 test - No initialValues", () => {
    expect(makeMatrix([2, 4])).toMatchSnapshot();
});

test("4x11 test - No initialValues", () => {
    expect(makeMatrix([4, 11])).toMatchSnapshot();
});

test("1x1x1 test - No initialValues", () => {
    expect(makeMatrix([1, 1, 1])).toMatchSnapshot();
});

test("3x3x3 test - No initialValues", () => {
    expect(makeMatrix([3, 2, 3])).toMatchSnapshot();
});

test("1x1x1x1 test - No initialValues", () => {
    expect(makeMatrix([1, 1, 1, 1])).toMatchSnapshot();
});

test("1x4x5x2 test - No initialValues", () => {
    expect(makeMatrix([1, 4, 5, 2])).toMatchSnapshot();
});

test("1x1x1x1x1 test - No initialValues", () => {
    expect(makeMatrix([1, 1, 1, 1, 1])).toMatchSnapshot();
});

test("2x6x2x5x2 test - No initialValues", () => {
    expect(makeMatrix([2, 6, 2, 5, 2])).toMatchSnapshot();
});

test("1x1x1x1x1x1 test - No initialValues", () => {
    expect(makeMatrix([1, 1, 1, 1, 1, 1])).toMatchSnapshot();
});

test("2x4x1x5x3x1 test - No initialValues", () => {
    expect(makeMatrix([2, 4, 1, 5, 5, 1])).toMatchSnapshot();
});
