function decodeString(S) {
    if (!S) {
        return '';
    }

    let stack = [];

    // 存字母前的数字，可能有多位
    let numstr = '';

    for (let s of S) {
        // 多位数字的处理
        if (Number.isInteger(+s)) {
            numstr += s;
            continue;
        }

        if (numstr) {
            stack.push(+numstr);
            numstr = ''; // 注意置空
        }

        // 不是右括号直接入栈
        if (s != ']') {
            stack.push(s);
            continue;
        }

        // 遇到右括号，需要出栈，直到不等于左括号
        let str = '';
        while (stack.length && stack.slice(-1) != '[') {
            let top = stack.pop();
            top += str;
            str = top;
        }

        // 删掉左括号
        stack.pop();

        // 取得数字
        let count = +stack.pop();

        // 字符拼接对应的次数
        let pushStr = str.repeat(count);

        stack.push(pushStr);
    }

    return stack.join('');
}
