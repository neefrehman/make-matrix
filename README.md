<img src="assets/banner.gif" alt="make-matrix" width="100%">

![build](https://github.com/neefrehman/make-matrix/workflows/CI/badge.svg?branch=master)
[![npm version](http://img.shields.io/npm/v/make-matrix.svg?style=flat)](https://npmjs.org/package/make-matrix "View this project on npm")
[![bundle size](https://badgen.net/bundlephobia/minzip/make-matrix)](https://bundlephobia.com/result?p=make-matrix "View this project on bundlephobia")

A simple, type-safe way to create multi-dimensional arrays

## Features

-   🛸 Easily create multi-dimensional arrays, with as many dimensions as needed
-   🎛 Define exact dimensions to create an array of specified size
-   🔢 Initialise every point in the array to a custom initial value
-   📜 Comes with [TypeScript](https://www.typescriptlang.org) definitions and type-safe returns
-   🔬 Tiny size ([~ 300 bytes gzipped](https://bundlephobia.com/result?p=make-matrix)), with no external dependencies

## Installation

Install the package from NPM, and import it into your JavaScript or TypeScript file:

```bash
npm install make-matrix
```

```js
import makeMatrix from "make-matrix";
```

## Basic usage

### Create a matrix

To simply create an array of `n` dimensions, just pass `n` as the function's first parameter.

```js
// create a 2D array
const twoDimensionalArray = makeMatrix(2);

// create a 3D array
const threeDimensionalArray = makeMatrix(3);

// create a 4D array
const fourDimensionalArray = makeMatrix(4);
```

### Create a matrix with specified dimensions

To create an array with exact dimensions, pass in an array of numbers.

```js
// create an array of size 5x7
const fiveBySevenArray = makeMatrix([5, 7]);

// create an array of size 3x3x2
const threeByThreeByTwoArray = makeMatrix([3, 3, 2]);

// create an array of size 2x6x9x5x6
const fiveDimensionalArray = makeMatrix([2, 6, 9, 5, 6]);
```

### Initialise the matrix with set values

By default each point in the matrix will be initialised to `null` (so that if reading a point returns `undefined`, you know that it exists outside the current bounds of the matrix). To fill each point with a custom inital value, pass that value as the function's second parameter, `initialValues`:

```js
// create a 3x5 array, with each point equal to 0
const twoDimensionalNumberArray = makeMatrix([3, 5], 0);

// create a 2x6x5 array, with each point equal to "value"
const threeDimensionalStringArray = makeMatrix([2, 6, 5], "value");
```

## With TypeScript

This package comes with type definitions to provide type-safety when working with the returned arrays.

Up to and including four dimensions, returned arrays will be given a specific type dictated by `T` and the number of dimensions, where `T` is the type of the value passed to the functions `initialValues` parameter (or `unknown` if not set).

For example, a three-dimensional array of numbers will be of type `number[][][]`. Points within the matrix can then only be reassigned to numbers. TypeScript's compiler will present errors when any reassignments are of the wrong type, including if they are at an incorrect depth in the array.

```ts
const threeDNumberArray = makeMatrix([2, 6, 5], 0); // return type of number[][][]

threeDNumberArray[2][1][2] = 10; // OK

threeDNumberArray[2][1][2] = false; // error: Type 'false' is not assignable to type 'number'

threeDNumberArray[2][1] = 10; // error: Type '"value"' is not assignable to type 'number[]'

threeDNumberArray[2][1][2][0] = 10; // error: Property '0' does not exist on type 'Number'
```

Above four dimensions, the returned array will have the generic type `Matrix<T>`. This type will ensure a minimum array depth of five levels, but won't be able to check the type of points within the matrix at six or more dimensions. The `Matrix` type is also a named export of this package, to be annotated manually if needed.

For more type-safety at these levels of dimensionality, it is recomended that you add more specific type annotations to your variables:

```ts
const sixDimensionalNumberArray: number[][][][][][] = makeMatrix(6, 0);
```

## Example

To easily create a 3D grid using [p5.js](https://github.com/processing/p5.js/), make-matrix can be used like below. The source code for the grid at the top of this readme [can be seen here](https://github.com/neefrehman/Generative/blob/master/src/sketches/20/05/120520.tsx), and an [interactive demo of it here](https://generative.neef.co/120520).

```js
const res = 10; // 10px grid resolution
const matrix = makeMatrix([5, 5, 5]); // A 5x5x5 cube grid

for (let x = 0; x < matrix.length; x += res) {
    for (let y = 0; y < matrix[x].length; y += res) {
        for (let z = 0; z < matrix[x][y].length; z += res) {
            line(x, y, z, x + res, y, z);
            line(x, y, z, x, y + res, z);
            line(x, y, z, x, y, z + res);
        }
    }
}
```

## API

```ts
// Simple
makeMatrix(dimensions, initialValues);

// With types
makeMatrix<T>(
    dimensions: number | number[],
    initialValues?: T
): Matrix<T>;
```

### Parameters

-   `dimensions` — The desired dimensions of the matrix. A number or array of numbers.
-   `initialValues` — The value that each point in the matrix will initialise to. Optional (defaults to `null`). Can be anything.

### Returns

-   `Matrix` — A multidimensional array of your desired dimensions, with each point initialised to equal the `initialValues` parameter.

## Contributing

This project welcomes contributions. To get started, please [open an issue](https://github.com/neefrehman/make-matrix/issues) to do discuss the change you'd like to make. Then fork the repo, open it in your editor, and run `npm install` in your terminal. This will get everything set up for you to start making changes.

### Testing, linting and commit style

This project uses [ESLint](https://github.com/eslint/eslint), [Prettier](https://github.com/prettier/prettier), [commitlint](https://github.com/conventional-changelog/commitlint) and [Jest](https://github.com/facebook/jest) — in combination with [lint-staged](https://github.com/okonet/lint-staged) and [Husky](https://github.com/typicode/husky) — to enforce code quality, consistency and changelog style. These tools will check changed files, and cancel a commit with logging if any of the following are true:

1. Eslint has found non-fixable issues in the code
2. The Jest testing suites haven't all passed
3. The commit message doesn't meet the [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0/) (run `git cz` in terminal for help formatting your commit message)

Open your git logs to debug commit errors.

## License

This package is [MIT Licensed](https://github.com/neefrehman/make-matrix/blob/master/LICENSE).

---

<p align="center">
    <img src="assets/banner_alt-pixelated_bounce.gif" alt="make-matrix">
</p>
