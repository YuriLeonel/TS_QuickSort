# TypeScript QuickSort Implementation

A clean, well-documented implementation of the QuickSort algorithm in TypeScript, using the Lomuto partition scheme.

## Features

- Generic type support for sorting any comparable type
- In-place sorting
- Comprehensive test coverage with Jest
- Detailed TypeScript documentation
- Lomuto partition scheme implementation

## Project Structure

```
TS_QuickSort/
├── src/
│   ├── quicksort.ts      # Main QuickSort implementation
│   └── quicksort.test.ts # Test suite
├── package.json          # Project configuration and dependencies
├── tsconfig.json         # TypeScript configuration
├── jest.config.js        # Jest test configuration
└── README.md            # Project documentation
```

## Implementation Details

The implementation uses the Lomuto partition scheme and includes:

- Generic type support for sorting any comparable type
- In-place sorting
- Average time complexity: O(n log n)
- Worst case time complexity: O(n²)
- Space complexity: O(log n)

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/TS_QuickSort.git
cd TS_QuickSort

# Install dependencies
npm install
```

## Usage

```typescript
import { quickSort } from "./src/quicksort";

// Sort numbers
const numbers = [5, 2, 9, 1, 5, 6];
const sortedNumbers = quickSort(numbers);
console.log(sortedNumbers); // [1, 2, 5, 5, 6, 9]

// Sort strings
const strings = ["banana", "apple", "orange", "grape"];
const sortedStrings = quickSort(strings);
console.log(sortedStrings); // ['apple', 'banana', 'grape', 'orange']
```

## API Documentation

### `quickSort<T>(arr: T[], low?: number, high?: number): T[]`

Sorts an array using the QuickSort algorithm.

#### Parameters

- `arr`: The array to sort
- `low`: Starting index (default: 0)
- `high`: Ending index (default: arr.length - 1)

#### Returns

The sorted array

## Development

### Building the Project

```bash
npm run build
```

### Running Tests

```bash
npm test
```

The test suite includes:

- Sorting arrays of numbers
- Sorting arrays of strings
- Handling empty arrays
- Handling single-element arrays
- Handling already sorted arrays
- Handling arrays with duplicate elements
- Handling large arrays

### Linting

```bash
npm run lint
```

### Formatting

```bash
npm run format
```

## License

MIT
