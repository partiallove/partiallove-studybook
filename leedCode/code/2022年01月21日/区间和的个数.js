var countRangeSum = function(nums, lower, upper, dp = 0, n = 0) {
    for (var i = 0; i < nums.length; i++)
        for (var j = i; j < nums.length; j++) {
            dp = j === i ? nums[i] : dp + nums[j]
            if (dp >= lower && dp <= upper) n++
        }
    return n
};
