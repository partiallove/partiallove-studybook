var rand10 = function() {
    // 等概率1-5
    let result = rand7()
    while(result>5) result = rand7()
    // 等概率1-6
    let temp = rand7()
    while(temp === 7) temp = rand7()
    return temp <= 3 ? result : result + 5
};