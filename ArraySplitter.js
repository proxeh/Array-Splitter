// Given an array of length >= 0, and a positive integer N, return the contents of the array divided into N equally sized arrays.
// Where the size of the original array cannot be divided equally by N, the final part should have a length equal to the remainder.

const arraySplitter = (arr, n) => {
	// Determine size of each "split"
	const size = Math.ceil(arr.length / n);

	if (arr.length > 0) {
		// Create a new array to mutate
		return Array.from({ length: n }, (v, i) =>
			// map each element in new array into the "chunks" based on size
			arr.slice(i * size, i * size + size)
		);
	} else {
		return alert("Please add an array with at least 1 element.");
	}
};

// Example data
const exampleArrayEven = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const exampleArrayOdd = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const exampleSplit = 6;
const exampleFunctionEven = arraySplitter(exampleArrayEven, exampleSplit);
const exampleFunctionOdd = arraySplitter(exampleArrayOdd, exampleSplit);

// Console log a result
console.log("----- Array Splitter -----");
console.log("ExampleArrayEven: ", exampleArrayEven);
console.log("ExampleArrayOdd: ", exampleArrayOdd);
console.log("Example Split: " + exampleSplit);
console.log("\n");

console.log(
	`There are ${exampleArrayEven.length} items in the exampleArrayEven, and we will split these into ${exampleSplit} chunks.`
);
console.log(
	`The result of dividing ${exampleArrayEven.length} by ${exampleSplit} is: `,
	exampleFunctionEven
);
console.log(
	`\nThere are ${exampleArrayOdd.length} items in the exampleArrayOdd, and we will split these into ${exampleSplit} chunks.`
);
console.log(
	`The result of dividing ${exampleArrayOdd.length} by ${exampleSplit} is: `,
	exampleFunctionOdd
);

// Test!!! Uncomment to see alert for no value
// console.log(arraySplitter([], 2));
