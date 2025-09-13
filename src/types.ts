/**
 * Stops intellisense from expanding types and exposing their more complicated internals to users.
 *
 * @see {@link https://github.com/microsoft/TypeScript/issues/31940} for discussion
 */
type Brand<D> = D & {};

/**
 * A typed multidimensional array.
 *
 * @remarks
 * When a `Matrix` is created without knowing it's exact size or number of dimensions, such
 * as when creating one dynamically, it's impossible recursively construct a type for it.
 * Instead, we short circuit the type to resolve to `unknown[]`. This ensures an array of at
 * least one dimension is returned, but is unable to provide any more safety than that.
 */
export type Matrix<D extends readonly number[], T = unknown> = Brand<
  number extends D[number] ? unknown[] : BuildMatrix<D, T>
>;

/**
 * Recursively builds a matrix type based on an array of dimensions
 */
type BuildMatrix<D extends readonly number[], T> = D extends readonly []
  ? T
  : D extends readonly [infer _First, ...infer Rest]
    ? Rest extends readonly number[]
      ? BuildMatrix<Rest, T>[]
      : never
    : unknown[];

/**
 * An array of numbers with defined length, corresponding to points in a `Matrix`.
 *
 * @see {@link https://github.com/microsoft/TypeScript/issues/26223} for discussion and other
 * implementations, though this seems to be the only one that works properly for `makeMatrix`'s use case.
 *
 * @remarks
 * When a `Vector` is created without knowing the exact number of dimensions, such as when
 * creating one dynamically, we short circuit the type to resolve to `number[]` so that
 * `makeMatrix` can accept a dynamically created `dimensions` parameter.
 */
export type Vector<D extends readonly number[]> = Brand<
  number extends D[number] ? number[] : BuildTuple<D["length"], number>
>;

/**
 * Recursively builds a tuple of a specific length with a given type
 */
type BuildTuple<
  Length extends number,
  T,
  Acc extends T[] = [],
> = Acc["length"] extends Length ? Acc : BuildTuple<Length, T, [...Acc, T]>;
