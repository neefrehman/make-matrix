import makeMatrix from "../index";

// Test arrays of dimension-count `n`, with any initialised values of a string
test("1D test - With string initialValues", () => {
    expect(makeMatrix(1, "string")).toMatchSnapshot();
});

test("2D test - With string initialValues", () => {
    expect(makeMatrix(2, "string")).toMatchSnapshot();
});

test("3D test - With string initialValues", () => {
    expect(makeMatrix(3, "string")).toMatchSnapshot();
});

test("4D test - With String initialValues", () => {
    expect(makeMatrix(4, "string")).toMatchSnapshot();
});

test("5D test - With string initialValues", () => {
    expect(makeMatrix(5, "string")).toMatchSnapshot();
});

test("6D test - With string initialValues", () => {
    expect(makeMatrix(6, "string")).toMatchSnapshot();
});

// Test arrays of dimension-count `n`, with any initialised values of a number
test("1D test - With number initialValues", () => {
    expect(makeMatrix(1, 0)).toMatchSnapshot();
});

test("2D test - With number initialValues", () => {
    expect(makeMatrix(2, 0)).toMatchSnapshot();
});

test("3D test - With number initialValues", () => {
    expect(makeMatrix(3, 0)).toMatchSnapshot();
});

test("4D test - With number initialValues", () => {
    expect(makeMatrix(4, 0)).toMatchSnapshot();
});

test("5D test - With number initialValues", () => {
    expect(makeMatrix(5, 0)).toMatchSnapshot();
});

test("6D test - With number initialValues", () => {
    expect(makeMatrix(6, 0)).toMatchSnapshot();
});
