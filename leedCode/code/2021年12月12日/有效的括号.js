// 解法一
let isValid = function(s) {
    let stack = [], length = s.length;
    if(length % 2) return false;
    for(let item of s){
        switch(item){
            case "{":
            case "[":
            case "(":
                stack.push(item);
                break;
            case "}":
                if(stack.pop() !== "{") return false;
                break;
            case "]":
                if(stack.pop() !== "[") return false;
                break;
            case ")":
                if(stack.pop() !== "(") return false;
                break;
        }
    }
    return !stack.length;
};

// 解法二
var isValid = function(s) {
    s = s.split('');
    let sl = s.length;
    if (sl % 2) return false;
    let map = new Map([[')', '('], [']', '['], ['}', '{']]);
    let stack = [];
    for(let i of s){
        if (map.get(i)) {
            if (stack[stack.length - 1] !== map.get(i)) return false;
            else stack.pop();
        } else {
            stack.push(i);
        }
    }
    return !stack.length;
};
