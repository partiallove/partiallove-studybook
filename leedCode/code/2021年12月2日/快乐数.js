/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if(n<10){
        console.log(n)
        return (n==1||n==7)?true:false
    }
    let temp=n.toString()
    n=0
    for(let i=0;i<temp.length;i++){
        n+=temp[i]**2
    }
    return isHappy(n)
};


