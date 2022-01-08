function preorder(root) {
    if (!root) return [];
    const res = [];
    const inPreorder = (root) => {
        if (!root) return;
        res.push(root.val);
        for (let i = 0; i < root.children.length; i++) {
            inPreorder(root.children[i]);
        }
    }
    inPreorder(root);
    return res;
};
