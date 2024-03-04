var longestValidParentheses = function(s) {
    // initialize a stack with -1 as a sentinel value
    let stack = [-1];
    // initialize the answer as 0
    let ans = 0;
    // loop through the string
    for (let i = 0; i < s.length; i++) {
      // if the current character is an opening bracket, push its index to the stack
      if (s[i] === "(") {
        stack.push(i);
        console.log(s[i], stack)
      } else {
        // if the current character is a closing bracket, pop the last index from the stack
        stack.pop();
        console.log(s[i], stack)
        // if the stack is empty, push the current index to the stack
        if (stack.length === 0) {
          stack.push(i);
          console.log("0", stack)
        } else {
          // if the stack is not empty, update the answer with the maximum length of the valid substring
          ans = Math.max(ans, i - stack[stack.length - 1]);
          console.log("!0", ans, stack)
        }
      }
    }
    // return the answer
    return ans;
  };
  
  console.log(longestValidParentheses("(()()))"))