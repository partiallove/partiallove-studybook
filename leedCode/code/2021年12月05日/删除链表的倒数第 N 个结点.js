var removeNthFromEnd = function (head, n) {
    if (head.next === null && n === 1) return (head = head.next);
    let arr = [];
    let h = head;
    while (h !== null) {
        arr.push(h);
        h = h.next;
    }
    let arrLen = arr.length;
    if (n === arrLen) {
        head.next = null;
        return arr[1];
    }
    arr[arrLen - n - 1].next = arr[arrLen - n].next;
    return head;
};
