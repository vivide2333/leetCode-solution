function trap(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let trappedWater = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            height[left] >= leftMax ? leftMax = height[left] : trappedWater += leftMax - height[left];
            left++;
        } else {
            height[right] >= rightMax ? rightMax = height[right] : trappedWater += rightMax - height[right];
            right--;
        }
    }

    return trappedWater;
}

console.log(trap([1,0,2,0,3,4,5]))