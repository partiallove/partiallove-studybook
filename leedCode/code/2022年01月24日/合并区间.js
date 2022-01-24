
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const res = [];
    intervals.sort((a,b)=>a[0]-b[0]);
    let left = intervals[0][0];
    let right = intervals[0][1];
    for(const [l,r] of intervals) {
        if(right >= l && r>=right){   //如果后面的左区间小于等于前面的右区间 且 如果后面的右区间大于等于前面的右区间 则更新前面的右区间
            right = r;
        }else if(right < l){     //如果后面的左区间大于前面的右区间 则 把前面的左右区间放入res; 更新前面的左右区间
            res.push([left,right]);
            left = l;
            right = r;
        }
    }
    res.push([left,right]);  //最后一个也放进res;
    return res;
};