var sortColors = function (nums) {
    let p0 = 0 //指向0
    let p1 = 0 //指向0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {//如果当前i指向的元素等于1，则交换当前元素和p1指向的元素
            let temp = nums[p1]
            nums[p1] = nums[i]
            nums[i] = temp
            p1++
        } else if (nums[i] === 0) {//如果当前i指向的元素等于0，则交换当前元素和p0指向的元素
            let temp = nums[p0]
            nums[p0] = nums[i]
            nums[i] = temp
            //如果p0小于p1 则此时p0指向的元素是1，与i位置元素交换之后 这个交换过去的1位置就不对了 所以交换过去的1需要在和p1交换一下
            if (p0 < p1) {
                temp = nums[i];
                nums[i] = nums[p1];
                nums[p1] = temp;
            }
            //每次交换0之后都要移动p0和p1，如果p0===p1，则前面都是0，如果p0<p1,前面的代码已经交换了两次
            p0++
            p1++
        }
    }
};