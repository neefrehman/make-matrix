import makeMatrix from "../index";

// Test arrays of specific dimensions, with callbacks returning "self aware" initialised values
test("vector callback test - straight", () => {
    expect(makeMatrix([2, 2, 2], vector => vector)).toStrictEqual([
        [
            [
                [0, 0, 0],
                [0, 0, 1]
            ],
            [
                [0, 1, 0],
                [0, 1, 1]
            ]
        ],
        [
            [
                [1, 0, 0],
                [1, 0, 1]
            ],
            [
                [1, 1, 0],
                [1, 1, 1]
            ]
        ]
    ]);
});

test("vector callback test - joined", () => {
    expect(
        makeMatrix([2, 2, 2, 1], vector => `my position is ${vector.join()}`)
    ).toStrictEqual([
        [
            [["my position is 0,0,0,0"], ["my position is 0,0,1,0"]],
            [["my position is 0,1,0,0"], ["my position is 0,1,1,0"]]
        ],
        [
            [["my position is 1,0,0,0"], ["my position is 1,0,1,0"]],
            [["my position is 1,1,0,0"], ["my position is 1,1,1,0"]]
        ]
    ]);
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
    ).toStrictEqual([
        [
            [
                { x: 0, y: 0, z: 0 },
                { x: 0, y: 0, z: 1 },
                { x: 0, y: 0, z: 2 }
            ],
            [
                { x: 0, y: 1, z: 0 },
                { x: 0, y: 1, z: 1 },
                { x: 0, y: 1, z: 2 }
            ],
            [
                { x: 0, y: 2, z: 0 },
                { x: 0, y: 2, z: 1 },
                { x: 0, y: 2, z: 2 }
            ]
        ],
        [
            [
                { x: 1, y: 0, z: 0 },
                { x: 1, y: 0, z: 1 },
                { x: 1, y: 0, z: 2 }
            ],
            [
                { x: 1, y: 1, z: 0 },
                { x: 1, y: 1, z: 1 },
                { x: 1, y: 1, z: 2 }
            ],
            [
                { x: 1, y: 2, z: 0 },
                { x: 1, y: 2, z: 1 },
                { x: 1, y: 2, z: 2 }
            ]
        ],
        [
            [
                { x: 2, y: 0, z: 0 },
                { x: 2, y: 0, z: 1 },
                { x: 2, y: 0, z: 2 }
            ],
            [
                { x: 2, y: 1, z: 0 },
                { x: 2, y: 1, z: 1 },
                { x: 2, y: 1, z: 2 }
            ],
            [
                { x: 2, y: 2, z: 0 },
                { x: 2, y: 2, z: 1 },
                { x: 2, y: 2, z: 2 }
            ]
        ]
    ]);
});
