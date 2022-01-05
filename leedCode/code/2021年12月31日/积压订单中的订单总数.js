/**
 * @param {number[][]} orders
 * @return {number}
 */
var getNumberOfBacklogOrders = function(orders) {
    let mod = 1000000007
    let buy = new MaxPriorityQueue({ priority: (bid) => bid.price })
    let sell = new MinPriorityQueue({ priority: (bid) => bid.price })
    let total = 0
    for(let [price, amount, orderType] of orders) {
        if (orderType === 0) { // 买 找卖小
            while (!sell.isEmpty() && sell.front().priority <= price && amount > 0) {
                let head = sell.dequeue().element
                if (amount < head.amount) {
                    sell.enqueue({price: head.price, amount: head.amount - amount})
                    total -= amount
                    amount = 0
                } else {
                    amount -= head.amount
                    total -= head.amount
                }
            }
            if (amount > 0) buy.enqueue({price, amount}), total += amount
        } else {// 卖  找买大
            while (!buy.isEmpty() && buy.front().priority >= price && amount > 0)  {
                let head = buy.dequeue().element
                if (amount < head.amount) {
                    buy.enqueue({price: head.price, amount: head.amount - amount})
                    total -= amount
                    amount = 0
                } else {
                    amount -= head.amount
                    total -= head.amount
                }
            }
            if (amount > 0) sell.enqueue({price, amount}), total += amount
        }
    }
    return total % mod
};