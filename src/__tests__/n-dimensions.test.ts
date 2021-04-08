import makeMatrix from "../index";

// Test arrays of dimension-count `n`, without any initialised values
test("1D test - No initialValues", () => {
    expect(makeMatrix(1)).toMatchSnapshot();
});

test("2D test - No initialValues", () => {
    expect(makeMatrix(2)).toMatchSnapshot();
});

test("3D test - No initialValues", () => {
    expect(makeMatrix(3)).toMatchSnapshot();
});

test("4D test - No initialValues", () => {
    expect(makeMatrix(4)).toMatchSnapshot();
});

test("5D test - No initialValues", () => {
    expect(makeMatrix(5)).toMatchSnapshot();
});

test("6D test - No initialValues", () => {
    expect(makeMatrix(6)).toMatchSnapshot();
});
