/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
class UnionFindCollect {
    constructor(n) {
        this.parent = new Array(n).fill(0).map((cur, index) => index);
        this.size = n;
    }

    find(x) {
        if (x !== this.parent[x]) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX !== rootY) {
            this.parent[rootY] = rootX;
            this.size--;
        }
    }
}
const makeConnected = (n, connections)=> {
    //n个电脑最少需要n-1个网线，也就是当网线数量小于n-1的时候是链接不成功的
    if (connections.length < n - 1) return -1;
    const uf = new UnionFindCollect(n);
    //利用并查集模板合并连通分量
    //ps：这个月一直在并查集，默认大家会写并查集模板
    for(let [x,y] of connections){
        uf.union(x, y)
    }
    //返回连通域的数量unionSize
    const unionSize = uf.size;
    //最后只需要保留一个连通域（把所有的电脑都连通），所以需要把所有的连通域都链接起来
    //链接unionSize个连通域需要的最少网线数量为unionSize-1
    return unionSize - 1;
};