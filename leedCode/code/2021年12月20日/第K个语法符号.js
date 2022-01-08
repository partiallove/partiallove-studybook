/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */

var kthGrammar = function(N, K) {
    let res;
    if(N===1)return 0;
    if(K%2){
        res = kthGrammar(N-1,Math.floor(K/2)+1);
    }else{
        res = kthGrammar(N-1,K/2);
    }
    if(K%2){
        return res;
    }else{
        return res===0?1:0;
    }

};