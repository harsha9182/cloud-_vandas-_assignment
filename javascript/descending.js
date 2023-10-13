// Define an array of numbers to be sorted in descending order
const numbers = [5, 2, 9, 1, 5, 6];

// Use the sort() method with a custom compare function
numbers.sort(function(a, b) {
  return b - a;
});

// Display the sorted array in descending order
console.log("Sorted Array in Descending Order:", numbers);
