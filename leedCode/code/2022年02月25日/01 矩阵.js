/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    let res = [];
    let len = mat.length;
    let lenx = mat[0].length;

    function fn(y, x, t) {
        // 上
        if (y - 1 >= 0) {
            if (res[y - 1][x] < 0) {
                res[y - 1][x] = t + 1;
                queue.push([y - 1, x]);
            }
        }
        // 下
        if (y + 1 <= len - 1) {
            if (res[y + 1][x] < 0) {
                res[y + 1][x] = t + 1;
                queue.push([y + 1, x]);
            }
        }
        // 左
        if (x >= 1) {
            if (res[y][x - 1] < 0) {
                res[y][x - 1] = t + 1;
                queue.push([y, x - 1]);
            }
        }
        // 右
        if (x + 1 <= lenx - 1) {
            if (res[y][x + 1] < 0) {
                res[y][x + 1] = t + 1;
                queue.push([y, x + 1]);
            }
        }
    }
    let queue = [];
    for (let a = 0; a < len; a++) {
        res[a] = [];
        for (let b = 0; b < lenx; b++) {
            if (mat[a][b]) {
                res[a][b] = -1;
            } else {
                res[a][b] = 0;
                queue.push([a, b]);
            }
        }
    }

    while (queue.length) {
        let [a, b] = queue.shift();
        let value = res[a][b];
        fn(a, b, value);
    }

    return res;
};