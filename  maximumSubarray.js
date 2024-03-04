var maxSubArray = function(nums) {
    // Initialize the current and maximum sums to the first element
    let currSum = nums[0];
    let maxSum = nums[0];
    // Loop through the rest of the array
    for (let i = 1; i < nums.length; i++) {
      // Update the current sum by adding the current element
      // or starting a new subarray from the current element
      currSum = Math.max(currSum + nums[i], nums[i]);
      // Update the maximum sum by comparing it with the current sum
      maxSum = Math.max(maxSum, currSum);
    }
    // Return the maximum sum
    return maxSum;
  };
  
