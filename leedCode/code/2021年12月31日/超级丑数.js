/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    let res=new Array(n+1).fill(1),pointers=new Array(primes.length).fill(1),nums=[];
    // 外层循环遍历填充res
    for(let i=2;i<=n;i++){
        // 内层循环1：计算当前 指针指向的丑数*指针对应的质因子
        for(let j=0;j<primes.length;j++){
            nums[j]=res[pointers[j]]*primes[j];
        }
        res[i]=Math.min(...nums);
        // 内层循环2：找到选出的res[i]对应的指针，把指针往前移
        for(let k=0;k<nums.length;k++){
            if(nums[k]==res[i]) pointers[k]++;
        }
        nums=[];
    }
    return res[n];
};
