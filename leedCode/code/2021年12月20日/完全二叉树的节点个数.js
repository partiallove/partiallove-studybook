var countNodes = function(root) {
    let l = root, r = root;
    // 记录左右子树高度
    let hl = 0, hr = 0;
    while (l != null) {
        l = l.left;
        hl++;
    }
    while (r != null) {
        r = r.right;
        hr++
    }
    // 如果左右子树高度相同，是满二叉树(终结条件，当遍历道最后一层节点时，没有子节点，所以hl == hr)
    if (hl == hr) {
        return Math.pow(2, hl) - 1;
    }
    // 不相同，按普通二叉树逻辑计算
    return 1 + countNodes(root.left) + countNodes(root.right);
};