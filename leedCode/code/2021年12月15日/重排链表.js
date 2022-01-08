var reorderList = function(head, s = [], tmp) {// 换行可删除，合并到4行
    while (head)
        tmp = head.next,
            head.next = null,
            s.push(head),
            head = tmp
    var i = -1, j = s.length
    while (++i < --j)
        s[i].next = s[j],
        j !== i + 1 && (s[j].next = s[i + 1])
    return s[0]
};