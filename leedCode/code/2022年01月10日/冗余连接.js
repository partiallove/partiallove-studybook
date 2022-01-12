/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    let roots = {}
    for(let i=1; i<=edges.length; i++){
        roots[i] = i
    }

    function find (n){
        return roots[n] === n ? n : roots[n] = find(roots[n])
    }

    function union(a, b){
        roots[find(a)] = find(b)
    }

    for([a, b] of edges){
        if(find(a) === find(b)) return [a, b]
        union(a, b)
    }
};
