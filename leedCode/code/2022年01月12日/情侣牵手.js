/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function (row) {
    let len = row.length;
    let N = len >> 1;// 右移一位，相当于除以2
    let uf = new UnionFind(N);
    for (let i = 0; i < len; i += 2) {// 跳着循环，每次取两个值
        uf.unite(row[i] >> 1, row[i + 1] >> 1);// 拿到这两个人之后，都给除以2，进行连通
    }

    return N - uf.getCount();
};

// 并查集的模板
class UnionFind {
    constructor(n) {
        this.parent = new Array(n).fill(0).map((v, i) => i);
        this.rank = new Array(n).fill(1);
        this.setCount = n; // 连通分量
    }
    findSet (index) {
        if (this.parent[index] !== index) {
            this.parent[index] = this.findSet(this.parent[index]);
        }
        return this.parent[index];
    }
    unite (index1, index2) { // 合并
        // 拿到他们的顶点坐标
        let root1 = this.findSet(index1), root2 = this.findSet(index2);
        if (root1 !== root2) {
            // 判断一下各自集合的节点个数，节点少的集合要往节点多的集合上合并
            if (root1 < root2) {
                [root1, root2] = [root2, root1]; // root1 是节点个数多的集合
            }
            // 合并根节点
            this.parent[root2] = root1;
            // 计算已经合并的节点数量
            this.rank[index1] += this.root2;
            this.setCount--; // 合并一个，城市数量减去一
        }
    }
    getCount () {
        return this.setCount;
    }
    connected (index1, index2) { // 来判断两个顶点，是否是一个连通分量
        let root1 = this.findSet(index1), root2 = this.findSet(index2);
        return root1 === root2;
    }
}