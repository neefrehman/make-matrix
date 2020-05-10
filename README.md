<!-- TODO: LOOPING MATRIX P5 GIF? -->

# make-matrix

https://github.com/{neefrehman}/{make-matrix}/workflows/{CI}/badge.svg / commitizen badge / npm badge / zipsize badge / downloads badge / license badge

A simple, type-safe way to create multi-dimensional arrays

## Features

-   🛸 Easily create multi-dimensional arrays, with as many dimensions as are needed
-   🎛 Define exact dimensions to create an array of specified size
-   🔢 Initialise every point in the array to a custom initial value
-   📜 Comes with [TypeScript](https://www.typescriptlang.org) type definitions and type-safe returns
-   🔬 Tiny size ([~ 360 bytes gzipped](https://bundlephobia.com/result?p=make-matrix)), with no external dependencies

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

### Create matrix with specified dimensions

To create an array with exact dimensions, pass in an array of numbers.

```js
// create an array of size 5x7
const fiveBySevenArray = makeMatrix([5, 7]);

// create an array of size 3x3x2
const threeByThreeByTwoArray = makeMatrix([3, 3, 2]);

// create an array of size 2x6x9x5x6
const fourDimensionalArray = makeMatrix([2, 6, 9, 5, 6]);
```

### Initialise your array with set values

By default each point in the matrix will be initialised to `null` (so that if reading a point returns `undefined`, you know that it exists outside the current bounds of the matrix.) To fill each point in the matrix with a custom inital value, pass that value as the function's second parameter — `initialValues`:

```js
const threeDimensionalNumberArray = makeMatrix([2, 6, 5], 0);

const fourDimensionalStringArray = makeMatrix([2, 6, 5], "value");
```

<!-- TODO ## Example

To create the 3D grid seen at the top of this readme, with [p5.js](https://github.com/processing/p5.js/), make-matrix can be used as follows:

```js
let codeIsComingSoon;
``` --->

## With TypeScript

This package comes with type definitions to provide type-safety when working with the returned arrays.

Up to and including four dimensions, returned arrays will be given a specific type dictated by `T` and the number of dimensions, where `T` is the type of the value passed to the functions `initialValues` parameter (or `unknown` if not set). For example, a three-dimensional array of numbers will be of type `number[][][]`. Points within the matrix can then only be reassigned to numbers. TypeScript's compiler will present errors when any reassignments are of the wrong type, including if they are at an incorrect depth in the array.

```js
const threeDNumberArray = makeMatrix([2, 6, 5], 0); // return type of number[][][]

threeDNumberArray[2][1][2] = 10; // OK

threeDNumberArray[2][1][2] = false; // ERROR: Type 'false' is not assignable to type 'number'

threeDNumberArray[2][1] = 10; // ERROR: Type '"value"' is not assignable to type 'number[]

threeDNumberArray[2][1][2][0] = 10; // ERROR: Property '0' does not exist on type 'Number'
```

Above four dimensions, the returned array will have the Generic type `Matrix<T>`. This type will ensure a minimum array depth of five levels, but won't be able to check the type of points within the matrix at six or more dimensions. For more type-safety at these levels, it is recomended that you annotate your variables:

```js
const sixDimensionalNumberArray: number[][][][][][] = makeMatrix(6, 0);
```

Thes package also contains `Matrix` as a named export, in the case you need to add a shallow level of type-safety before assigning a value to a variable:

```js
import makeMatrix, { Matrix } from "make-matrix";

let matrix: Matrix<string>;

if (dimensionCount === 5) {
    matrix = makeMatrix([10, 10, 10, 10, 10], "value");
} else if (dimensionCount === 6) {
    matrix = makeMatrix([10, 10, 10, 10, 10, 10], "value");
}
```

## API

```js
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

### Testing, linting and commit message enforcement

This project uses [ESLint](https://github.com/eslint/eslint), [Prettier](https://github.com/prettier/prettier), [commitlint](https://github.com/conventional-changelog/commitlint) and [Jest](https://github.com/facebook/jest) — in combination with [lint-staged](https://github.com/okonet/lint-staged) and [Husky](https://github.com/typicode/husky) — to enforce code quality, consistency and changelog style. These tools will check changed files, and cancel a commit with logging if any of the following are true:

1. Eslint has found non-fixable issues in the code
2. The Jest testing suites haven't all passed
3. The commit message doesn't meet the [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0/) (run `git cz` in terminal for help formatting your commit message)

Open your git logs to debug commit errors.

## License

This package is [MIT Licensed](https://github.com/neefrehman/make-matrix/blob/master/LICENSE).
