var climbStairs = function(n) {
    // create an array of size n + 1
    let dp = new Array(n + 1);
    // initialize the base cases
    dp[0] = 1; // there is one way to climb zero steps
    dp[1] = 1; // there is one way to climb one step
    // loop from the second step to the nth step
    for (let i = 2; i <= n; i++) {
      // the number of ways to climb to the ith step is the sum of the ways to climb to the previous two steps
      dp[i] = dp[i - 1] + dp[i - 2];
    }
    // return the last element of the array
    return dp[n];
  };
  