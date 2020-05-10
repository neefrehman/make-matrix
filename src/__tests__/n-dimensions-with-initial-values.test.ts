import makeMatrix from "../index";

// Test arrays of dimension-count `n`, with any initialised values of a string
test("1D test - With string initialValues", () => {
    expect(makeMatrix(1, "string")).toStrictEqual(["string"]);
});

test("2D test - With string initialValues", () => {
    expect(makeMatrix(2, "string")).toStrictEqual([["string"], ["string"]]);
});

test("3D test - With string initialValues", () => {
    expect(makeMatrix(3, "string")).toStrictEqual([
        [["string"], ["string"]],
        [["string"], ["string"]],
        [["string"], ["string"]]
    ]);
});

test("4D test - With String initialValues", () => {
    expect(makeMatrix(4, "string")).toStrictEqual([
        [
            [["string"], ["string"]],
            [["string"], ["string"]],
            [["string"], ["string"]]
        ],
        [
            [["string"], ["string"]],
            [["string"], ["string"]],
            [["string"], ["string"]]
        ],
        [
            [["string"], ["string"]],
            [["string"], ["string"]],
            [["string"], ["string"]]
        ],
        [
            [["string"], ["string"]],
            [["string"], ["string"]],
            [["string"], ["string"]]
        ]
    ]);
});

test("5D test - With string initialValues", () => {
    expect(makeMatrix(5, "string")).toStrictEqual([
        [
            [
                [["string"], ["string"]],
                [["string"], ["string"]],
                [["string"], ["string"]]
            ],
            [
                [["string"], ["string"]],
                [["string"], ["string"]],
                [["string"], ["string"]]
            ],
            [
                [["string"], ["string"]],
                [["string"], ["string"]],
                [["string"], ["string"]]
            ],
            [
                [["string"], ["string"]],
                [["string"], ["string"]],
                [["string"], ["string"]]
            ]
        ],
        [
            [
                [["string"], ["string"]],
                [["string"], ["string"]],
                [["string"], ["string"]]
            ],
            [
                [["string"], ["string"]],
                [["string"], ["string"]],
                [["string"], ["string"]]
            ],
            [
                [["string"], ["string"]],
                [["string"], ["string"]],
                [["string"], ["string"]]
            ],
            [
                [["string"], ["string"]],
                [["string"], ["string"]],
                [["string"], ["string"]]
            ]
        ],
        [
            [
                [["string"], ["string"]],
                [["string"], ["string"]],
                [["string"], ["string"]]
            ],
            [
                [["string"], ["string"]],
                [["string"], ["string"]],
                [["string"], ["string"]]
            ],
            [
                [["string"], ["string"]],
                [["string"], ["string"]],
                [["string"], ["string"]]
            ],
            [
                [["string"], ["string"]],
                [["string"], ["string"]],
                [["string"], ["string"]]
            ]
        ],
        [
            [
                [["string"], ["string"]],
                [["string"], ["string"]],
                [["string"], ["string"]]
            ],
            [
                [["string"], ["string"]],
                [["string"], ["string"]],
                [["string"], ["string"]]
            ],
            [
                [["string"], ["string"]],
                [["string"], ["string"]],
                [["string"], ["string"]]
            ],
            [
                [["string"], ["string"]],
                [["string"], ["string"]],
                [["string"], ["string"]]
            ]
        ],
        [
            [
                [["string"], ["string"]],
                [["string"], ["string"]],
                [["string"], ["string"]]
            ],
            [
                [["string"], ["string"]],
                [["string"], ["string"]],
                [["string"], ["string"]]
            ],
            [
                [["string"], ["string"]],
                [["string"], ["string"]],
                [["string"], ["string"]]
            ],
            [
                [["string"], ["string"]],
                [["string"], ["string"]],
                [["string"], ["string"]]
            ]
        ]
    ]);
});

test("6D test - With string initialValues", () => {
    expect(makeMatrix(6, "string")).toStrictEqual([
        [
            [
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ]
            ],
            [
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ]
            ],
            [
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ]
            ],
            [
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ]
            ],
            [
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ]
            ]
        ],
        [
            [
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ]
            ],
            [
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ]
            ],
            [
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ]
            ],
            [
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ]
            ],
            [
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ]
            ]
        ],
        [
            [
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ]
            ],
            [
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ]
            ],
            [
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ]
            ],
            [
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ]
            ],
            [
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ]
            ]
        ],
        [
            [
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ]
            ],
            [
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ]
            ],
            [
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ]
            ],
            [
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ]
            ],
            [
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ]
            ]
        ],
        [
            [
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ]
            ],
            [
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ]
            ],
            [
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ]
            ],
            [
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ]
            ],
            [
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ]
            ]
        ],
        [
            [
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ]
            ],
            [
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ]
            ],
            [
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ]
            ],
            [
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ]
            ],
            [
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ],
                [
                    [["string"], ["string"]],
                    [["string"], ["string"]],
                    [["string"], ["string"]]
                ]
            ]
        ]
    ]);
});

// Test arrays of dimension-count `n`, with any initialised values of a number
test("1D test - With number initialValues", () => {
    expect(makeMatrix(1, 0)).toStrictEqual([0]);
});

test("2D test - With number initialValues", () => {
    expect(makeMatrix(2, 0)).toStrictEqual([[0], [0]]);
});

test("3D test - With number initialValues", () => {
    expect(makeMatrix(3, 0)).toStrictEqual([
        [[0], [0]],
        [[0], [0]],
        [[0], [0]]
    ]);
});

test("4D test - With number initialValues", () => {
    expect(makeMatrix(4, 0)).toStrictEqual([
        [
            [[0], [0]],
            [[0], [0]],
            [[0], [0]]
        ],
        [
            [[0], [0]],
            [[0], [0]],
            [[0], [0]]
        ],
        [
            [[0], [0]],
            [[0], [0]],
            [[0], [0]]
        ],
        [
            [[0], [0]],
            [[0], [0]],
            [[0], [0]]
        ]
    ]);
});

test("5D test - With number initialValues", () => {
    expect(makeMatrix(5, 0)).toStrictEqual([
        [
            [
                [[0], [0]],
                [[0], [0]],
                [[0], [0]]
            ],
            [
                [[0], [0]],
                [[0], [0]],
                [[0], [0]]
            ],
            [
                [[0], [0]],
                [[0], [0]],
                [[0], [0]]
            ],
            [
                [[0], [0]],
                [[0], [0]],
                [[0], [0]]
            ]
        ],
        [
            [
                [[0], [0]],
                [[0], [0]],
                [[0], [0]]
            ],
            [
                [[0], [0]],
                [[0], [0]],
                [[0], [0]]
            ],
            [
                [[0], [0]],
                [[0], [0]],
                [[0], [0]]
            ],
            [
                [[0], [0]],
                [[0], [0]],
                [[0], [0]]
            ]
        ],
        [
            [
                [[0], [0]],
                [[0], [0]],
                [[0], [0]]
            ],
            [
                [[0], [0]],
                [[0], [0]],
                [[0], [0]]
            ],
            [
                [[0], [0]],
                [[0], [0]],
                [[0], [0]]
            ],
            [
                [[0], [0]],
                [[0], [0]],
                [[0], [0]]
            ]
        ],
        [
            [
                [[0], [0]],
                [[0], [0]],
                [[0], [0]]
            ],
            [
                [[0], [0]],
                [[0], [0]],
                [[0], [0]]
            ],
            [
                [[0], [0]],
                [[0], [0]],
                [[0], [0]]
            ],
            [
                [[0], [0]],
                [[0], [0]],
                [[0], [0]]
            ]
        ],
        [
            [
                [[0], [0]],
                [[0], [0]],
                [[0], [0]]
            ],
            [
                [[0], [0]],
                [[0], [0]],
                [[0], [0]]
            ],
            [
                [[0], [0]],
                [[0], [0]],
                [[0], [0]]
            ],
            [
                [[0], [0]],
                [[0], [0]],
                [[0], [0]]
            ]
        ]
    ]);
});

test("6D test - With number initialValues", () => {
    expect(makeMatrix(6, 0)).toStrictEqual([
        [
            [
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ]
            ],
            [
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ]
            ],
            [
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ]
            ],
            [
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ]
            ],
            [
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ]
            ]
        ],
        [
            [
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ]
            ],
            [
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ]
            ],
            [
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ]
            ],
            [
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ]
            ],
            [
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ]
            ]
        ],
        [
            [
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ]
            ],
            [
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ]
            ],
            [
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ]
            ],
            [
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ]
            ],
            [
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ]
            ]
        ],
        [
            [
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ]
            ],
            [
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ]
            ],
            [
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ]
            ],
            [
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ]
            ],
            [
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ]
            ]
        ],
        [
            [
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ]
            ],
            [
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ]
            ],
            [
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ]
            ],
            [
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ]
            ],
            [
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ]
            ]
        ],
        [
            [
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ]
            ],
            [
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ]
            ],
            [
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ]
            ],
            [
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ]
            ],
            [
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ],
                [
                    [[0], [0]],
                    [[0], [0]],
                    [[0], [0]]
                ]
            ]
        ]
    ]);
});
