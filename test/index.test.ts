import { describe, it, expect } from 'vitest';
import { 
  iterateKeys, iterateValues, iterateEntries, iterateDeep, 
  mapObject, filterObject, reduceObject, 
  getByPath, findDeep 
} from '../src/index.js';

describe('ObjectIterator', () => {
  describe('iterators', () => {
    const obj = { a: 1, b: 2, c: 3 };

    it('iterateKeys', () => {
      const keys = Array.from(iterateKeys(obj));
      expect(keys).toEqual(['a', 'b', 'c']);
    });

    it('iterateValues', () => {
      const values = Array.from(iterateValues(obj));
      expect(values).toEqual([1, 2, 3]);
    });

    it('iterateEntries', () => {
      const entries = Array.from(iterateEntries(obj));
      expect(entries).toEqual([['a', 1], ['b', 2], ['c', 3]]);
    });

    it('iterateDeep', () => {
      const nested = { a: 1, b: { c: 2, d: { e: 3 } } };
      const entries = Array.from(iterateDeep(nested));
      
      expect(entries).toContainEqual({ path: ['a'], key: 'a', value: 1, isLeaf: true });
      expect(entries).toContainEqual({ path: ['b'], key: 'b', value: { c: 2, d: { e: 3 } }, isLeaf: false });
      expect(entries).toContainEqual({ path: ['b', 'c'], key: 'c', value: 2, isLeaf: true });
      expect(entries).toContainEqual({ path: ['b', 'd'], key: 'd', value: { e: 3 }, isLeaf: false });
      expect(entries).toContainEqual({ path: ['b', 'd', 'e'], key: 'e', value: 3, isLeaf: true });
    });
  });

  describe('transformers', () => {
    const obj = { a: 1, b: 2, c: 3 };

    it('mapObject', () => {
      const mapped = mapObject(obj, (v) => v * 2);
      expect(mapped).toEqual({ a: 2, b: 4, c: 6 });
    });

    it('filterObject', () => {
      const filtered = filterObject(obj, (v) => v > 1);
      expect(filtered).toEqual({ b: 2, c: 3 });
    });

    it('reduceObject', () => {
      const reduced = reduceObject(obj, (acc, v) => acc + v, 0);
      expect(reduced).toBe(6);
    });
  });

  describe('search', () => {
    const nested = { a: 1, b: { c: 2, d: { e: 3 } } };

    it('getByPath', () => {
      expect(getByPath(nested, 'a')).toBe(1);
      expect(getByPath(nested, 'b.c')).toBe(2);
      expect(getByPath(nested, 'b.d.e')).toBe(3);
      expect(getByPath(nested, ['b', 'd', 'e'])).toBe(3);
      expect(getByPath(nested, 'b.x.y')).toBeUndefined();
    });

    it('findDeep', () => {
      const path = findDeep(nested, (v) => v === 3);
      expect(path).toEqual(['b', 'd', 'e']);

      const notFound = findDeep(nested, (v) => v === 99);
      expect(notFound).toBeNull();
    });
  });
});
