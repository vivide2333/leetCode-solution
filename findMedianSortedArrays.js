var findMedianSortedArrays = function(nums1, nums2) {
    let i1 = i2 = 0; // Initialize pointers for both arrays
    let smallest, valBefore; // Variables to store the smallest value and the value before the median
    const pivot = Math.floor((nums1.length + nums2.length) / 2); // Calculate the pivot index

    // Iterate through both arrays until one is exhausted
    while (nums1[i1] || nums2[i2]) {
        // Determine the smaller value between nums1[i1] and nums2[i2]
        smallest = (nums2[i2] === void 0 || nums1[i1] < nums2[i2]) ? nums1[i1++] : nums2[i2++];

        // If the total length is odd, return the value at the pivot index
        if ((nums1.length + nums2.length) % 2) {
            if (pivot === i1 + i2 - 1) {
                return smallest;
            }
        } else {
            // If the total length is even, store the value before the median
            if (pivot - 1 === i1 + i2 - 1) {
                valBefore = smallest;
            }
            // Calculate and return the median
            if (pivot === i1 + i2 - 1) {
                return (smallest + valBefore) / 2;
            }
        }
    }
};
