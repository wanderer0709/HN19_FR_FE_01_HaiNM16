function arrayofThreeElements(a, n) {
    var b = [];
    for (var i = 0; i < n; i++) {
        if (a[i - 1] == undefined) {
            a[i - 1] = 0;
        }
        else if (a[i + 1] == undefined) {
            a[i + 1] = 0;
        }
        b[i] = a[i - 1] + a[i] + a[i + 1];
    }
    return b;
}
