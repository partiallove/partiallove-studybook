/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    let arr = preorder.split(',')
    let stack = [1]
    for(let i = 0; i < arr.length; i++){
        if (!stack.length) return false
        stack.pop()
        if (arr[i] !== '#') stack.push(1, 1)
    }
    return stack.length === 0
};