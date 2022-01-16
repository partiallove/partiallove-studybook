/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function(edges) {
    let inDegree = []; // 记录节点入度
    let vec = [] // 记录边
    let un = new UnionFind(edges.length)

    for(let i = 0; i <= edges.length;i++) {
        inDegree[i] = 0
    }
    for (let i = 0; i < edges.length; i++) {
        inDegree[edges[i][1]]++; // 统计入度
    }
    for (let i = edges.length - 1; i >= 0; i--) {
        if (inDegree[edges[i][1]] == 2) {
            vec.push(edges[i]);
        }
    }
    if(vec.length) {
        // 删除入度为2的边
        if(isTreeAfterRemoveEdge(edges,vec[0])) {
            return vec[0]
        }
        return vec[1]
    } else {
        // 判断环路
        for(let i = 0; i < edges.length;i++){
            if(un.union(edges[i][0],edges[i][1])) {
                return edges[i]
            }
        }
    }

    function isTreeAfterRemoveEdge(edges, deleteEdge) {
        for(let i = 0; i < edges.length;i++){
            if(edges[i] == deleteEdge) continue;
            un.union(edges[i][0],edges[i][1])
        }
        if(un.find(deleteEdge[0]) == un.find(deleteEdge[1])) {
            return true
        }
        return false
    }
};

class UnionFind{
    constructor(n){
        this.rank = []
        this.parent = []
        for(let i = 0;i<=n;i++){
            this.parent[i] = i;
            this.rank[i] = 0;
        }
    }

    find(index){
        if(this.parent[index] != index){
            this.parent[index] = this.find(this.parent[index]);
        }
        return this.parent[index];
    }

    union(x,y){
        let x_root = this.find(x)
        let y_root = this.find(y)
        if(x_root == y_root) {
            return [x,y]
        }else {
            if(this.rank[x_root]>this.rank[y_root]) {
                this.parent[y_root] = x_root
            }else if(this.rank[x_root]<this.rank[y_root]){
                this.parent[x_root] = y_root
            }else {
                this.parent[x_root] = y_root
                this.rank[y_root]++
            }
        }
    }
}