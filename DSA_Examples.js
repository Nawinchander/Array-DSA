/// Find Maximum Element

function findMax(arr) {
  let max = arr[0];

  for (let num of arr) {
    if (num > max) max = num;
  }

  return max;
}

console.log(findMax([3, 7, 2, 9])); // 9


/// Reverse Array

function reverseArray(arr) {
  let left = 0, right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}

console.log(reverseArray([1, 2, 3, 4]));

//// Remove Duplicates

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));





