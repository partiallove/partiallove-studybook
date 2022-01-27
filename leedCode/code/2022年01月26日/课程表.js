/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let list = Array(numCourses).fill(0) // 记录 当前课程 要先修的课的门数, index: 课程, value: 门数
    let obj = {}                         // 记录受该课程影响的 其他课程 key: 课程, value: [其他课程]
    for(let p of prerequisites){
        let [x, y] = p                     // x: 想要学习课程  y: 要先完成课程
        list[x]++
        obj[y] ? obj[y].push(x) : obj[y] = [x]
    }
    let num = 0                         // 记录上课次数, 上一次课就加1, 最后和要上多少课对比
    let queue = []
    list.forEach((t, i) => {
        if(!t) queue.push(i)              // 把不受其他课影响的课放到队列中, 即courses[i] == 0时
    })
    while(queue.length){
        num++
        let head = queue.shift()
        // 把受该课影响的课门数 减1, 当课不受其他科影响了, 就可以去上课了, 加入队列
        obj[head] && obj[head].forEach(t => {
            list[t]--
            if(list[t] === 0) queue.push(t)
        })
    }
    return num === numCourses // 如果上课次数和要上多少门课数相等,就是true
};