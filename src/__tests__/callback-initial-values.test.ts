import makeMatrix from "../index";

// Test arrays of specific dimensions, with callbacks returning initialised values
test("length: 1 test - With string callback initialValues", () => {
    expect(makeMatrix([1], () => "string")).toMatchSnapshot();
});

test("length: 2 test - With math callback initialValues", () => {
    expect(makeMatrix([2], () => 10 - 2)).toMatchSnapshot();
});
