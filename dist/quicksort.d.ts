/**
 * QuickSort implementation in TypeScript
 *
 * This implementation uses the Lomuto partition scheme and includes:
 * - Generic type support for sorting any comparable type
 * - In-place sorting
 * - Average time complexity: O(n log n)
 * - Worst case time complexity: O(n²)
 * - Space complexity: O(log n)
 */
/**
 * Sorts an array using the QuickSort algorithm
 * @param arr - The array to sort
 * @param low - Starting index (default: 0)
 * @param high - Ending index (default: arr.length - 1)
 * @returns The sorted array
 */
export declare function quickSort<T>(arr: T[], low?: number, high?: number): T[];
