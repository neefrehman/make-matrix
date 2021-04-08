import makeMatrix from "../index";

// Test arrays of specific dimensions, with string initialised values
test("length: 1 test - With string initialValues", () => {
    expect(makeMatrix([1], "string")).toMatchSnapshot();
});

test("length: 2 test - With string initialValues", () => {
    expect(makeMatrix([2], "string")).toMatchSnapshot();
});

test("length: 7 test - With string initialValues", () => {
    expect(makeMatrix([7], "string")).toMatchSnapshot();
});

test("1x1 test - With string initialValues", () => {
    expect(makeMatrix([1, 1], "string")).toMatchSnapshot();
});

test("1x4 test - With string initialValues", () => {
    expect(makeMatrix([2, 4], "string")).toMatchSnapshot();
});

test("4x10 test - With string initialValues", () => {
    expect(makeMatrix([4, 10], "string")).toMatchSnapshot();
});

test("1x1x1 test - With string initialValues", () => {
    expect(makeMatrix([1, 1, 1], "string")).toMatchSnapshot();
});

test("3x3x3 test - With string initialValues", () => {
    expect(makeMatrix([3, 2, 3], "string")).toMatchSnapshot();
});

test("1x1x1x1 test - With string initialValues", () => {
    expect(makeMatrix([1, 1, 1, 1], "string")).toMatchSnapshot();
});

test("1x4x5x2 test - With string initialValues", () => {
    expect(makeMatrix([1, 4, 5, 2], "string")).toMatchSnapshot();
});

test("1x1x1x1x1 test - With string initialValues", () => {
    expect(makeMatrix([1, 1, 1, 1, 1], "string")).toMatchSnapshot();
});

test("2x4x2x5x2 test - With string initialValues", () => {
    expect(makeMatrix([2, 4, 2, 5, 2], "string")).toMatchSnapshot();
});

test("1x1x1x1x1x1 test - With string initialValues", () => {
    expect(makeMatrix([1, 1, 1, 1, 1, 1], "string")).toMatchSnapshot();
});

test("2x4x1x5x3x1 test - With string initialValues", () => {
    expect(makeMatrix([2, 4, 1, 5, 5, 1], "string")).toMatchSnapshot();
});

// Test arrays of specific dimensions, with number initialised values
test("length: 1 test - With number initialValues", () => {
    expect(makeMatrix([1], 0)).toMatchSnapshot();
});

test("length: 2 test - With number initialValues", () => {
    expect(makeMatrix([2], 0)).toMatchSnapshot();
});

test("length: 7 test - With number initialValues", () => {
    expect(makeMatrix([7], 0)).toMatchSnapshot();
});

test("1x1 test - With number initialValues", () => {
    expect(makeMatrix([1, 1], 0)).toMatchSnapshot();
});

test("1x4 test - With number initialValues", () => {
    expect(makeMatrix([2, 4], 0)).toMatchSnapshot();
});

test("4x11 test - With number initialValues", () => {
    expect(makeMatrix([4, 11], 0)).toMatchSnapshot();
});

test("1x1x1 test - With number initialValues", () => {
    expect(makeMatrix([1, 1, 1], 0)).toMatchSnapshot();
});

test("3x3x3 test - With number initialValues", () => {
    expect(makeMatrix([3, 2, 3], 0)).toMatchSnapshot();
});

test("1x1x1x1 test - With number initialValues", () => {
    expect(makeMatrix([1, 1, 1, 1], 0)).toMatchSnapshot();
});

test("1x4x5x2 test - With number initialValues", () => {
    expect(makeMatrix([1, 4, 5, 2], 0)).toMatchSnapshot();
});

test("1x1x1x1x1 test - With number initialValues", () => {
    expect(makeMatrix([1, 1, 1, 1, 1], 0)).toMatchSnapshot();
});

test("2x4x2x5x2 test - With number initialValues", () => {
    expect(makeMatrix([2, 4, 2, 5, 2], 0)).toMatchSnapshot();
});

test("1x1x1x1x1x1 test - With number initialValues", () => {
    expect(makeMatrix([1, 1, 1, 1, 1, 1], 0)).toMatchSnapshot();
});

test("2x4x1x5x3x1 test - With number initialValues", () => {
    expect(makeMatrix([2, 4, 1, 5, 5, 1], 0)).toMatchSnapshot();
});
