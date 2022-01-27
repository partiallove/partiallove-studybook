var hIndex = function (citations) {
    citations.sort((a, b) => a - b);
    let l = 0,
        r = citations.length - 1;
    while (l < r) {
        let m = l + r >> 1;
        if (citations[m] >= citations.length - m) r = m;
        else l = m + 1;
    }

    let h = citations.length - l;
    return citations[l] >= h ? h : 0;
};