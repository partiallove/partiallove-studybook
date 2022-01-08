/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    const obj={}
    //获取每个 item 的乘积和
    for(let i=0;i<points.length;i++){
        const item1=points[i][0]
        const item2=points[i][1]
        obj[i]=item1*item1+item2*item2
    }

    const arr=[]
    //根据 value 的值给 key 排序
    const sortedKeys=Object.keys(obj).sort((a,b)=>obj[a]-obj[b])
    //获取前 K 个最近的点，并根据 key push 进新的 arr 中
    sortedKeys.splice(0,K).forEach(key=>arr.push(points[key]))

    return arr
};