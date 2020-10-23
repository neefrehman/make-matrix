import { Matrix, ValueOrFunction, Vector } from "./types";

/**
 * Returns a matrix (multi-dimensional array) with your desired dimensions and
 * values.
 *
 * If a number is passed as the `dimensions` parameter, the smallest array with
 * that number of dimensions is returned. If an array of numbers is passed, the returned
 * matrix will be of those exact dimensions.
 *
 * @param dimensions `D`: The desired dimensions of the matrix. A number or array of numbers.
 * @param initialValues The value that each point in the matrix initialises to. Can also take a
 *  callback function which returns a value to fill the matrix dynamically. Defaults to `null`.
 *
 * @example
 * const twoDArray = makeMatrix(2); // A 2D array
 *
 * const threeXThreeXTwoArray = makeMatrix([3, 3, 2]); // An array of size 3x3x2
 *
 * const twoDNumberArray = makeMatrix([3, 5], 0); // A 3x5 array initialised to 0
 *
 * const threeDStringArray = makeMatrix([2, 6, 5], "hi"); // A 2x6x5 array initialised to "hi"
 *
 * const twoDRandomNumberArray = makeMatrix([1, 4], () => Math.random()); // A 1x4 array initialised with random numbers
 */
export const makeMatrix = <D extends number, T>(
    dimensions: D | Vector<D>,
    initialValues: ValueOrFunction<T> | null = null
): Matrix<D, T> => {
    let currentDimensionLength: number;
    let remainingDimensions: number | number[];
    let needsRecursion: boolean;

    if (typeof dimensions === "number") {
        currentDimensionLength = dimensions;
        remainingDimensions = dimensions - 1;
        needsRecursion = remainingDimensions > 0;
    } else {
        currentDimensionLength = dimensions[0];
        remainingDimensions = dimensions.slice(1);
        needsRecursion = remainingDimensions.length > 0;
    }

    if (!Number.isInteger(currentDimensionLength)) {
        throw new TypeError(`Dimensions must be integers`);
    }

    // Spread operator used as as constructed array's can't be mapped:
    // https://itnext.io/heres-why-mapping-a-constructed-array-doesn-t-work-in-javascript-f1195138615a
    const currentMatrix = [...Array(currentDimensionLength)].map(() => {
        return typeof initialValues === "function"
            ? initialValues()
            : initialValues;
    });

    const finalMatrix = needsRecursion
        ? currentMatrix.map(() =>
              makeMatrix(remainingDimensions, initialValues)
          )
        : currentMatrix;

    return finalMatrix as Matrix<D, T>;
};

export default makeMatrix;

// TODO: callback logic for mapping values based on Vector position?
// makeMatrix([1, 2, 3], position => position.join())
// progress: https://www.staging-typescript.org/play?ts=4.0.3#code/DYUwLgBAxgrgTnEA7MARAlgW2QZ3QeyQgF4IAGAbgChRIAHfPMApALggDUQox84SIAbQC61WhDqIAbgRg4M2JHkIDKVKlEI5IURAEMwIALIG46AB4CAPKgghzhpABMcEJDEwAjEHAA0EABUAPgAKKggIiCcsXBYcdi4ePhsg33DI9CR0Zj1gDlyYEHjOApAAeTgAMRgkHhYrYIgAHzcYYGABd3aqAEp2EzAzcxt-RuIgiABvdIjNJR14RBQFWMIAGWQAczAACwFoxWUlQTJRGegtSERMPUzMzZWlOP2Yp60AOhxgdCgQEIBGHrUSIXeZuEAgFwAJW48COAmutyySAeryOOHeoBRuwgEzU6nOc20EERdxRj3RAGF8DVIKRScjUYc4pitrtgZEiZBeGBchS4tTaQiQDcyUzVkpBSgIABqCD-DkRSQgGQ0+RolgCHl8jVaKVgRUQABmfBC4nQxEoEHQECsEG1wH5eppKAo1plMp6EkY2RYgnQwlU1EJWnwoEx+E2IQYTBYQPUIJN-DN4GtQbTdodTslLoN7s93tjhEEsAQyDQuqQwg9wYTnMu0EW5YGQwEgneHYAggg9ABPEKlpYV5nrNk7HrCd43OghEJe8ZTc4gxBgeBEMC9uggfBG61ZHJ5UquYgniAAIiNNTqhDPS5BkQA-Hvfbl8sBCjg53f7xB2HcD2+H6GgAvvGIZgkamS5C2FidBC0KwnARzfhAT6Ds2pgWFOegznOJBBChP66CABjGJh5ghAy9zZjg-j-ugr5Hj0hEQMxP4ROw6EoDB5jBsu4BrsaUHADxEB6K4PEjIEQTUMBwZEmGIARlGxGkTxISCAATP42kQJpwj+HhC4DDs7xGsA+CmiZ7xwHozj4JgeEAFTymQPTuQSnleQSAD0PmBGUqBlJxuTAJ4ehQAA1hAFmbD8xp8BA050PcEBSEeEDhTgkIQCoiS8PwMa+oQD5UH5EDYbhRXMIQCTcAVKTzhM0zlSCXJCOYvi9r4ABevgdu8gakNVLDUOVoHqOV7VsK0Xg+CIIgCKphjqYI-z+AAzMIQIQOVlQAJIABpGAAouwOxgGAdDxH5cW7DAnjvJomA+ZgPxwIwO5gD5ASbiAADKujoHQ33oDgOAfj5G0AJwACxkND6iZIYcBGhFICcPVyS2PYjguLN3j8KQdm9hMuPIPj3a2b2VjuHNcDNecZAPuwdOE4aWLbDs7CoLJ6gbluJTvuUVRXjVSANBMpABHYDgU64JOoYEzQQLOTWBF6rMqj4brlRdV03T5d07A9T0Oa972fUa32-VugNmCDPlgxDRRQwA7AAbB7G2TU5TnhC5nZJW0zAHBKuRiT2vYkgJcBIDlnjRwABstZGDBYSfvBAAAKH0yE4RT2n9AC0OB6Ea4DRzAdAB-a+AQAArFElYYhAnaePgUgY03YdvEodFgAA5K4iBQM9FM5b2NJiUgSD4LyhgQFP8C1+lZh6J4oCuEmSV8BjZcVxu7wBz5VACxjkk43LziuGzPijFLEBX3jrj-OcT4BCI5w87LL96e-gQFrCG-k-X+8sIA+xBB-IBX8QQ-3JjfCAsMAGf2EDA4BcDQEIPxg3FB6CgEgJJvgtBJDdb+QCIFYKEBqjtCLoLA+ldSpAA

// FIXME: const m1: number[][][] = makeMatrix([1, 1, 2]); // https://github.com/microsoft/TypeScript/issues/40081
