// A function that takes an array of integers as input and returns the maximum product of a contiguous subarray
function maxProductSubarray(nums) {
    // Initialize two variables to store the current maximum and minimum product
    let currentMax = nums[0];
    let currentMin = nums[0];
    // Initialize a variable to store the global maximum product
    let globalMax = nums[0];
    // Loop through the array from the second element
    for (let i = 1; i < nums.length; i++) {
      // Store the current maximum product in a temporary variable
      let temp = currentMax;
      // Update the current maximum product by comparing the product of the current element with the current maximum and minimum product, and the current element itself
      currentMax = Math.max(Math.max(currentMax * nums[i], currentMin * nums[i]), nums[i]);
      // Update the current minimum product by comparing the product of the current element with the previous maximum and minimum product, and the current element itself
      currentMin = Math.min(Math.min(temp * nums[i], currentMin * nums[i]), nums[i]);
      // Update the global maximum product by comparing it with the current maximum product
      globalMax = Math.max(globalMax, currentMax);
    }
    // Return the global maximum product
    return globalMax;
  }
  

console.log(maximumProductSubarray([1,-1, 2,3]))