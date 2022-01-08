let buildTree = (preorder, inorder) => {

    //当preorder和inorder均为空的时候说明已经到了空节点
    if (!preorder.length || !inorder.length) return null;

    //创建根节点 -> preorder[0]
    let node = new TreeNode(preorder[0]);

    //找到preoder[0]对应inorder中的位置
    let index = inorder.indexOf(preorder.shift());

    //左右子树递归
    node.left = buildTree(preorder, inorder.slice(0, index));
    node.right = buildTree(preorder, inorder.slice(index + 1));

    //返回根节点
    return node;
};
