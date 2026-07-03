/**
 * Iterate over all keys of an object.
 */
export function* iterateKeys<T extends Record<string, any>>(
  obj: T,
): Generator<keyof T> {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      yield key;
    }
  }
}

/**
 * Iterate over all values of an object.
 */
export function* iterateValues<T extends Record<string, any>>(
  obj: T,
): Generator<T[keyof T]> {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      yield obj[key];
    }
  }
}

/**
 * Iterate over all entries of an object.
 */
export function* iterateEntries<T extends Record<string, any>>(
  obj: T,
): Generator<[keyof T, T[keyof T]]> {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      yield [key, obj[key]];
    }
  }
}

export interface DeepEntry {
  path: string[];
  key: string;
  value: any;
  isLeaf: boolean;
}

/**
 * Deeply iterate over all nested object properties.
 */
export function* iterateDeep(
  obj: Record<string, any>,
  currentPath: string[] = [],
): Generator<DeepEntry> {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      const isObject =
        value !== null && typeof value === "object" && !Array.isArray(value);

      yield {
        path: [...currentPath, key],
        key,
        value,
        isLeaf: !isObject,
      };

      if (isObject) {
        yield* iterateDeep(value, [...currentPath, key]);
      }
    }
  }
}
