
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
    let ans = {}, map = new Map()
    init(accounts.length)
    accounts.forEach((item, index) => {
        item.slice(1).forEach(email => {
            if (map.has(email))
                merge(index, map.get(email))
            else map.set(email, index)
        })
    })
    let group = {}, arr = []
    accounts.forEach((_, index) => {
        let f = find(index)
        if (group[f]) group[f].push(index)
        else group[f] = [index]
    })
    Object.keys(group).forEach(k => {
        let s = new Set()
        group[k].forEach(i => {
            accounts[i].slice(1).forEach(el => s.add(el))
        })
        arr.push([accounts[k][0], ...[...s].sort()])
    })
    return arr
};
var fa = []
let init = (len) => Array.from({ length: len }).forEach((_, i) => fa[i] = i)
let find = (x) => x == fa[x] ? x : find(fa[x])
let merge = (x, y) => fa[find(x)] = find(y)
