var relativeSortArray = function (arr1, arr2) {
    const counts = new Array(1001).fill(0);

    for (const n of arr1) { // 统计arr1数字的出现次数
        counts[n]++;
    }

    const res = [];
    for (const n of arr2) {   // 遍历arr2
        while (counts[n] > 0) { // 出现次数>0，循环推入res
            res.push(n);	   // 循环结束时，值变为0
            counts[n]--;
        }
    }

    for (let i = 0; i < counts.length; i++) { // 遍历counts
        while (counts[i] > 0) { // 非0项的索引 循环推入res
            res.push(i);
            counts[i]--;
        }
    }
    return res;
};