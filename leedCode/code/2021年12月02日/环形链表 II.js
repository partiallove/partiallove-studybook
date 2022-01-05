
var detectCycle = function(head) {
    var p = [head, head]
    while (p[0] && p[1]) {
        p = [p[0].next, p[1].next ? p[1].next.next : null]
        if (p[0] && p[0] === p[1]) {
            while (head) {
                if (p[0] === head) return head
                p[0] = p[0].next, head = head.next
            }
        }
    }
    return null
};


