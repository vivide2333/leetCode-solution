// A function that takes a number of pairs and returns an array of all possible combinations of well-formed parentheses
var generateParenthesis = function(n) {
    // An array to store the results
    var res = [];
    // A helper function that uses recursion and backtracking to generate the parentheses
    var generate = function (str, left, right) {
        console.log(str, left,right )
      // If there are no more parentheses to add, push the string to the result array
      if (left === 0 && right === 0) {
        res.push(str);
        return;
      }
      // If there are more left parentheses than right, it is invalid, so return
      if (left > right) return;
      // If there are still left parentheses to add, add one and recurse
      if (left > 0) generate(str + "(", left - 1, right);
      // If there are still right parentheses to add, add one and recurse
      if (right > 0) generate(str + ")", left, right - 1);
    };
    // Call the helper function with an empty string and n pairs of parentheses
    
    generate("", n, n);
    // Return the result array
    return res;
  };
  
  console.log(generateParenthesis(3))