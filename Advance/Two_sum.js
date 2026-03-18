/// Optimal Approach (HashMap) — O(n)


function twoSum(arr, target) {
  let map = new Map(); // value -> index

  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(arr[i], i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]


