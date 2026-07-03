import { iterateDeep } from "./iterators.js";

/**
 * Get a value from an object using a dot-notation path or an array of keys.
 */
export function getByPath(
  obj: Record<string, any>,
  path: string | string[],
): any {
  const keys = Array.isArray(path) ? path : path.split(".");
  let current = obj;

  for (const key of keys) {
    if (
      current === null ||
      current === undefined ||
      typeof current !== "object"
    ) {
      return undefined;
    }
    current = current[key];
  }

  return current;
}

/**
 * Search an object deeply for a value matching a predicate.
 * Returns the first match as a path array, or null if not found.
 */
export function findDeep(
  obj: Record<string, any>,
  predicate: (value: any, key: string, path: string[]) => boolean,
): string[] | null {
  for (const { value, key, path } of iterateDeep(obj)) {
    if (predicate(value, key, path)) {
      return path;
    }
  }
  return null;
}
