var movingCount = function (m, n, k) {
    var visted = new Array(m).fill(0).map(() => new Array(n).fill(false));
    var res = 0;
    var dfs = function (i, j) {
        //边界情况 && 确定是否已经遍历过
        if (i < 0 || j < 0 || i >= m || j >= n || visted[i][j]) return;
        visted[i][j] = true;
        // 开始查找
        if (canEnter(i, j, k)) {
            res++;
            dfs(i + 1, j);
            dfs(i, j + 1);
            dfs(i - 1, j);
            dfs(i, j - 1);
        }
    };
    dfs(0, 0);
    return res;
};

// 是否可以进入
var canEnter = function (m, n, k) {
    var res = 0;
    while (m) {
        res += m % 10;
        m = Math.floor(m / 10);
    }

    while (n) {
        res += n % 10;
        n = Math.floor(n / 10);
    }
    return res <= k;
};