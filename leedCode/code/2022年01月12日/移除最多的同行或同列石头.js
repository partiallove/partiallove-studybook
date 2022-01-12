
/**
 * @param {number[][]} stones
 * @return {number}
 */

class UnionFind {
    constructor(n) {
        this.parent = new Array(n);
        this.size = new Array(n);
        this.count = 0;
    }
    find(x) {
        let parent = this.parent;
        while (x != parent[x]) {
            parent[x] = parent[ parent[x] ];
            x = parent[x];
        }
        return x;
    }
    ensure(x) {
        if (!this.parent[x]) {
            this.parent[x] = x;
            this.size[x] = 1;
            this.count++;
        }
    }
    union(p, q) {
        this.ensure(p);
        this.ensure(q);
        let parent = this.parent;
        let size = this.size;
        let rootP = this.find(p);
        let rootQ = this.find(q);
        if (rootP == rootQ) {
            return ;
        }
        if (size[rootP] > size[rootQ]) {
            parent[rootQ] = rootP;
            size[rootP] += size[rootQ];
        } else {
            parent[rootP] = rootQ;
            size[rootQ] += size[rootP];
        }
        this.count--;
    }
}

var removeStones = function(stones) {
    let union = new UnionFind(20000);
    for (let i = 0; i < stones.length; i++) {
        let [x, y] = stones[i];
        union.union(x, y+10000);
    }
    return stones.length - union.count;
};