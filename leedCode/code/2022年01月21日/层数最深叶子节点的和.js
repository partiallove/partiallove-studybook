/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    var arr = [];
    dfs(root, 0);
    var res = 0;
    if(arr.length === 0) return res;
    for(var i=0;i<arr[arr.length-1].length;i++){
        res += arr[arr.length-1][i];
    }
    return res;
    function dfs(root, n){
        if(!root) return;
        if(!Array.isArray(arr[n])) arr[n] = [];
        arr[n].push(root.val);
        dfs(root.left, n+1);
        dfs(root.right, n+1);
    }
};