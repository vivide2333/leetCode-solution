var maxArea = function(height) {
    let i = 0; // left pointer
    let j = height.length - 1; // right pointer
    let max = 0; // maximum area
    while (i < j) {
        // calculate the area
        let area = Math.min(height[i], height[j]) * (j - i);
        // update the maximum area
        max = Math.max(max, area);
        // move the pointer with the smaller height
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return max;
};
