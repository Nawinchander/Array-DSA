//// Two Pointer — Container With Most Water

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    let width = right - left;
    let h = Math.min(height[left], height[right]);
    max = Math.max(max, width * h);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}

// Example
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49


Complexity:

Time: O(n)
Space: O(1)


