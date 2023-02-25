function maxSubarraySum(arr) {
    let maxEndingHere = 0;
    let maxSoFar = -Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      maxEndingHere += arr[i];
      if (maxEndingHere > maxSoFar) {
        maxSoFar = maxEndingHere;
      }
      if (maxEndingHere < 0) {
        maxEndingHere = 0;
      }
    }
  
    return maxSoFar;
  }
  
  // Test
  const A1 = [1, 2, 3, 4, -10];
  console.log(maxSubarraySum(A1)); // Output: 10
  
  const A2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  console.log(maxSubarraySum(A2)); // Output: 6
  //TC o(N) SC 0(C)
  