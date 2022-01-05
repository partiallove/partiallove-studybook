var maximumScore = function(a, b, c) {
    let stone = [a,b,c]
    stone.sort((a,b)=>a-b)
    two = stone[0]+stone[1]
    if(two<=stone[2]){
        return two
    }else{
        return parseInt((two+stone[2])/2)
    }

};