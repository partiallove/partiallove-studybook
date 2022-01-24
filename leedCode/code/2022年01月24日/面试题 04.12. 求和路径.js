function getPathSum(root ,sum){
    if(root==null)return 0
    let val = sum - root.val
    return (root.val==sum) + getPathSum(root.left,val)+getPathSum(root.right,val)
}
var pathSum = function(root, sum) {
    if(root==null){return 0}
    // 分选这当前节点，和不选的情况
    return getPathSum(root,sum)+pathSum(root.left,sum)+pathSum(root.right,sum)
};