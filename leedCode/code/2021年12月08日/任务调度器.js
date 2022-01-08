function leastInterval(tasks, n) {
    let arr = Array(26).fill(0);
    for (let c of tasks) {
        //统计各个字母出现的次数
        arr[c.charCodeAt() - "A".charCodeAt()]++;
    }
    let max = 0;
    for (let i = 0; i < 26; i++) {
        //找到最大次数
        max = Math.max(max, arr[i]);
    }
    let ret = (max - 1) * (n + 1); //计算前n-1行n的间隔的时间大小
    for (let i = 0; i < 26; i++) {
        //计算和最大次数相同的字母个数，然后累加进ret
        if (arr[i] == max) {
            ret++;
        }
    }
    return Math.max(ret, tasks.length); //在tasks的长度和ret中取较大的一个
}
