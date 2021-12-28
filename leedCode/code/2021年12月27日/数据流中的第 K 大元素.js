class MinHeap {
    constructor(k, nums) {
        this.heap = [];
        this.k = k;
    }
    add(num) {
        if (this.heap.length < this.k) {
            this.heap.push(num);
            this.up(this.heap.length - 1);
        } else if (num > this.heap[0]) {
            this.heap[0] = num;
            this.down(0);
        }
    }
    up(i) {
        while (i > 0) {
            const parent = (i - 1) >> 1;
            if (this.heap[parent] > this.heap[i]) {
                [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
                i = parent;
            } else {
                break;
            }
        }
    }
    down(i) {
        while (2 * i + 1 < this.heap.length) {
            let child = 2 * i + 1;
            if (child + 1 < this.heap.length && this.heap[child + 1] < this.heap[child]) {
                child++;
            }
            if (this.heap[i] > this.heap[child]) {
                [this.heap[child], this.heap[i]] = [this.heap[i], this.heap[child]];
                i = child;
            } else {
                break;
            }
        }
    }
}

var KthLargest = function (k, nums) {
    this.heap = new MinHeap(k, nums);
    for (let i = 0; i < nums.length; i++) {
        this.heap.add(nums[i]);
    }
};

KthLargest.prototype.add = function (val) {
    this.heap.add(val);
    return this.heap.heap[0];
};
