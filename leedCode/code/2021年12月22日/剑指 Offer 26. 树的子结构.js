/* @param {TreeNode} A
* @param {TreeNode} B
* @return {boolean}
*/
var isSubStructure = function(A, B) {
    if(!B) return false;
    const valB = B.val;

    function dfs(node){
        if(!node) return false;
        // 如果节点值一样且B是子树 return true；
        if(node.val === valB && helper(node,B)) return true;
        return dfs(node.left) || dfs(node.right);
    }

    //判断B是不是A的子树
    function helper(nodeA,nodeB) {
        // 1.A的子树有，B的子树有。 如果值不一样 就直接return false; 否则递归子树
        if(nodeA && nodeB){
            if(nodeA.val !== nodeB.val) return false;
            return helper(nodeA.left,nodeB.left) && helper(nodeA.right,nodeB.right);
        }
        // 2.左子树无，右子树有。 return fasle;
        if(!nodeA && nodeB) return false;

        //3.左子树有，右子树无。 return true;
        //4.左子树无，右子树无。 return true;
        return true;
    }
    return dfs(A);
};