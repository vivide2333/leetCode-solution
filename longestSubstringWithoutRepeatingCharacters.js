function lengthOfLongestSubstring(s) {
    let charMap = {};
    let longest = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        let currentChar = s[end];
        if (charMap[currentChar] >= start) {
            start = charMap[currentChar] + 1;
        }
        charMap[currentChar] = end;
        longest = Math.max(longest, end - start + 1);
    }

    return longest;
}

// Example usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
