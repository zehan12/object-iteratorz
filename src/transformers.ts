/**
 * Map over object values to create a new object.
 */
export function mapObject<T extends Record<string, any>, U>(
  obj: T,
  fn: (value: T[keyof T], key: keyof T) => U,
): Record<keyof T, U> {
  const result = {} as Record<keyof T, U>;
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key as keyof T] = fn(obj[key], key);
    }
  }
  return result;
}

/**
 * Filter object properties based on a predicate.
 */
export function filterObject<T extends Record<string, any>>(
  obj: T,
  predicate: (value: T[keyof T], key: keyof T) => boolean,
): Partial<T> {
  const result = {} as Partial<T>;
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (predicate(obj[key], key)) {
        result[key as keyof T] = obj[key];
      }
    }
  }
  return result;
}

/**
 * Reduce object properties to a single value.
 */
export function reduceObject<T extends Record<string, any>, R>(
  obj: T,
  reducer: (accumulator: R, value: T[keyof T], key: keyof T) => R,
  initialValue: R,
): R {
  let accumulator = initialValue;
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      accumulator = reducer(accumulator, obj[key], key);
    }
  }
  return accumulator;
}
