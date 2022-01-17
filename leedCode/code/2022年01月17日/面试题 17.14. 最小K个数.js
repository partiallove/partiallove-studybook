/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function(arr, k) {
    if (k === 0) {
        return []
    }
    let sorted = false
    function quicksort(lo, hi) {
        if (sorted || lo >= hi) {
            return
        }
        let i = lo
        let j = hi
        const num = arr[lo]
        while (i < j) {
            while (i < j && arr[j] >= num) {
                j--
            }
            arr[i] = arr[j]
            while (i < j && arr[i] <= num) {
                i++
            }
            arr[j] = arr[i]
        }
        arr[i] = num
        if (i === k) {
            sorted = true
            return
        }
        quicksort(lo, i - 1)
        quicksort(i + 1, hi)
    }
    quicksort(0, arr.length - 1)
    return arr.slice(0, k)
};