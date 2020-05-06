import makeMatrix from "../index";

// Test arrays of dimension-count `n`, without any initialised values
test("1D test - No initialValues", () => {
    expect(makeMatrix(1)).toStrictEqual([null]);
});

test("2D test - No initialValues", () => {
    expect(makeMatrix(2)).toStrictEqual([[null], [null]]);
});

test("3D test - No initialValues", () => {
    expect(makeMatrix(3)).toStrictEqual([
        [[null], [null]],
        [[null], [null]],
        [[null], [null]]
    ]);
});

test("4D test - No initialValues", () => {
    expect(makeMatrix(4)).toStrictEqual([
        [
            [[null], [null]],
            [[null], [null]],
            [[null], [null]]
        ],
        [
            [[null], [null]],
            [[null], [null]],
            [[null], [null]]
        ],
        [
            [[null], [null]],
            [[null], [null]],
            [[null], [null]]
        ],
        [
            [[null], [null]],
            [[null], [null]],
            [[null], [null]]
        ]
    ]);
});

test("5D test - No initialValues", () => {
    expect(makeMatrix(5)).toStrictEqual([
        [
            [
                [[null], [null]],
                [[null], [null]],
                [[null], [null]]
            ],
            [
                [[null], [null]],
                [[null], [null]],
                [[null], [null]]
            ],
            [
                [[null], [null]],
                [[null], [null]],
                [[null], [null]]
            ],
            [
                [[null], [null]],
                [[null], [null]],
                [[null], [null]]
            ]
        ],
        [
            [
                [[null], [null]],
                [[null], [null]],
                [[null], [null]]
            ],
            [
                [[null], [null]],
                [[null], [null]],
                [[null], [null]]
            ],
            [
                [[null], [null]],
                [[null], [null]],
                [[null], [null]]
            ],
            [
                [[null], [null]],
                [[null], [null]],
                [[null], [null]]
            ]
        ],
        [
            [
                [[null], [null]],
                [[null], [null]],
                [[null], [null]]
            ],
            [
                [[null], [null]],
                [[null], [null]],
                [[null], [null]]
            ],
            [
                [[null], [null]],
                [[null], [null]],
                [[null], [null]]
            ],
            [
                [[null], [null]],
                [[null], [null]],
                [[null], [null]]
            ]
        ],
        [
            [
                [[null], [null]],
                [[null], [null]],
                [[null], [null]]
            ],
            [
                [[null], [null]],
                [[null], [null]],
                [[null], [null]]
            ],
            [
                [[null], [null]],
                [[null], [null]],
                [[null], [null]]
            ],
            [
                [[null], [null]],
                [[null], [null]],
                [[null], [null]]
            ]
        ],
        [
            [
                [[null], [null]],
                [[null], [null]],
                [[null], [null]]
            ],
            [
                [[null], [null]],
                [[null], [null]],
                [[null], [null]]
            ],
            [
                [[null], [null]],
                [[null], [null]],
                [[null], [null]]
            ],
            [
                [[null], [null]],
                [[null], [null]],
                [[null], [null]]
            ]
        ]
    ]);
});

test("6D test - No initialValues", () => {
    expect(makeMatrix(6)).toStrictEqual([
        [
            [
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ]
            ],
            [
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ]
            ],
            [
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ]
            ],
            [
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ]
            ],
            [
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ]
            ]
        ],
        [
            [
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ]
            ],
            [
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ]
            ],
            [
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ]
            ],
            [
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ]
            ],
            [
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ]
            ]
        ],
        [
            [
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ]
            ],
            [
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ]
            ],
            [
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ]
            ],
            [
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ]
            ],
            [
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ]
            ]
        ],
        [
            [
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ]
            ],
            [
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ]
            ],
            [
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ]
            ],
            [
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ]
            ],
            [
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ]
            ]
        ],
        [
            [
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ]
            ],
            [
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ]
            ],
            [
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ]
            ],
            [
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ]
            ],
            [
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ]
            ]
        ],
        [
            [
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ]
            ],
            [
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ]
            ],
            [
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ]
            ],
            [
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ]
            ],
            [
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ],
                [
                    [[null], [null]],
                    [[null], [null]],
                    [[null], [null]]
                ]
            ]
        ]
    ]);
});
