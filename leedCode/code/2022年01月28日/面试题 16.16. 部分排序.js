var subSort = function(array) {
    var m = -1;
    var n = -1;

    if (array.length > 1) {
        //从前往后遍历
        var min = array[0];
        for (let i = 0; i < array.length; ++i) {
            if (min > array[i]) {
                m = i;
            } else {
                min = array[i]
            }
        }

        //从后往前遍历
        var max = array[array.length - 1];
        for (let i = array.length - 1; i >= 0; --i) {
            if (max < array[i]) {
                n = i;
            } else {
                max = array[i]
            }
        }
    }

    return [n,m];
};