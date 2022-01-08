var pancakeSort = function (arr) {
    var n = arr.length - 1;
    var res = [];

    while (n >= 1) {
        var i = 0;
        var index = 0;
        for (let j = 0; j <= n; j++) {
            if (arr[j] > i) {
                i = arr[j]
                index = j;
            }
        }

        reverse(arr, 0, index);
        console.log('arr',arr);

        reverse(arr, 0, n);
        console.log('arr',arr)

        res.push(index+1);
        res.push(n+1);
        n--;
    }

    return res;
};

function reverse(arr, start, end) {
    console.log('end',end);
    while (start <= end) {
        var t = arr[start];
        arr[start] = arr[end];
        arr[end] = t;
        start++;
        end--;
    }
}
