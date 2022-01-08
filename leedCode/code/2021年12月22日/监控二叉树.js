/**
 * @param {TreeNode} root
 * @return {number}
 */
var minCameraCover = function(root) {
    let res=0;
    if (dfs(root) == 0) {
        res++;
    }
    // 根据子节点的状态返回父节点的状态；
    function dfs(node) {
        if (node == null) return 1;
        let left=dfs(node.left);
        let right=dfs(node.right);
        // 1.子节点有一个状态为0，则父节点返回 2 父节点需要一个摄像头 res++（根据贪心思想 由上面的节点监控下面的节点比较省摄像头）；
        if (left == 0 || right == 0) {
            res++;
            return 2;
        }
        // 2.左右2个子节点状态都是1，则父节点返回0 （因为子节点都没有摄像头，所以父节点需要被他的父节点监控；所以他是未被监控0）；
        if(left==1&&right==1) return 0;
        // 3.子节点有一个状态是2，则父节点返回 1 （因为子节点有一个是有摄像头的所以 父节点是被监控了的）
        if(left == 2 || right == 2) return 1;
    }
    return res;
};
