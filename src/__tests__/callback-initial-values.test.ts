import makeMatrix from "../index";

// Test arrays of specific dimensions, with callbacks returning initialised values
test("length: 1 test - With string initialValues", () => {
    expect(makeMatrix([1], () => "string")).toStrictEqual(["string"]);
});

test("length: 2 test - With string initialValues", () => {
    expect(makeMatrix([2], () => 10 - 2)).toStrictEqual([8, 8]);
});
