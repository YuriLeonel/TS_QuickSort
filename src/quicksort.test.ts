import { quickSort } from "./quicksort";

describe("QuickSort", () => {
  test("should sort an array of numbers", () => {
    const arr = [5, 2, 9, 1, 5, 6];
    const sorted = quickSort([...arr]);
    expect(sorted).toEqual([1, 2, 5, 5, 6, 9]);
  });

  test("should sort an array of strings", () => {
    const arr = ["banana", "apple", "orange", "grape"];
    const sorted = quickSort([...arr]);
    expect(sorted).toEqual(["apple", "banana", "grape", "orange"]);
  });

  test("should handle an empty array", () => {
    const arr: number[] = [];
    const sorted = quickSort([...arr]);
    expect(sorted).toEqual([]);
  });

  test("should handle an array with one element", () => {
    const arr = [42];
    const sorted = quickSort([...arr]);
    expect(sorted).toEqual([42]);
  });

  test("should handle an already sorted array", () => {
    const arr = [1, 2, 3, 4, 5];
    const sorted = quickSort([...arr]);
    expect(sorted).toEqual([1, 2, 3, 4, 5]);
  });

  test("should handle an array with duplicate elements", () => {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const sorted = quickSort([...arr]);
    expect(sorted).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
  });

  test("should handle a large array", () => {
    const arr = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
    const sorted = quickSort([...arr]);
    expect(sorted).toEqual([...arr].sort((a, b) => a - b));
  });
});
