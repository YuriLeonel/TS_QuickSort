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
 * Swaps two elements in an array
 * @param arr - The array containing the elements to swap
 * @param i - First index
 * @param j - Second index
 */
function swap<T>(arr: T[], i: number, j: number): void {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

/**
 * Partitions the array around a pivot element
 * @param arr - The array to partition
 * @param low - Starting index
 * @param high - Ending index
 * @returns The index of the pivot element
 */
function partition<T>(arr: T[], low: number, high: number): number {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, high);
  return i + 1;
}

/**
 * Sorts an array using the QuickSort algorithm
 * @param arr - The array to sort
 * @param low - Starting index (default: 0)
 * @param high - Ending index (default: arr.length - 1)
 * @returns The sorted array
 */
export function quickSort<T>(arr: T[], low: number = 0, high: number = arr.length - 1): T[] {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
  return arr;
}
