//// Sliding Window — Maximum Sum Subarray of Size K

function maxSumSubarray(arr, k) {
  let maxSum = 0;
  let windowSum = 0;

  // First window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  maxSum = windowSum;

  // Slide window
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

// Example
console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // 9



Complexity:

Time: O(n)
Space: O(1)


