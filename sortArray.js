let numbers = prompt("23, 09, 20, 4, 9, 20, 24, 12, 22:")
  .split(",")
  .map(Number);

let names = prompt("Jeric,Marriel,Harlyn):")
  .split(",");

let mergedArray = numbers.concat(names);

console.log("Merged Array:", mergedArray);

let sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("Numbers Sorted in Reverse Order:", sortedNumbers);

let sortedNames = [...names].sort();
console.log("Names Sorted Alphabetically:", sortedNames);