/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = (equations) => {
    const uf = new UnionFind(26);
    for (const e of equations) { // 将字母对应成数字
        if (e[1] === '=') {
            uf.union(e.charCodeAt(0) - 97, e.charCodeAt(3) - 97)
        }
    }
    for (const e of equations) {
        if (e[1] == '!' && uf.findSet(e.charCodeAt(0)-97) === uf.findSet(e.charCodeAt(3)-97)) {
            return false;
        }
    }
    return true;
}

class UnionFind {
    constructor(num) {
        this.parents = Array(num).fill().map(_ => -1);
        this.ranks = Array(num).fill().map(_ => 0);
    }
    findSet(x) { // 路径压缩，查x的根节点
        while (this.parents[x] !== -1) {
            x = this.parents[x];
        }
        return x;
    }
    union(x, y) {
        this.link(this.findSet(x), this.findSet(y));
    }
    link(x, y) {
        if (x === y) return;
        if (this.ranks[x] > this.ranks[y]) {
            this.parents[y] = x;
        } else {
            this.parents[x] = y;
            if (this.ranks[x] == this.ranks[y]) {
                this.ranks[y]++;
            }
        }
    }
}