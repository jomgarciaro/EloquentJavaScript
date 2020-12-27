function range(a, b, c = a < b ? 1 : -1) {
    let rng = [];
    if (c > 0) {
        for (let i = a; i <= b; i += c) {
            rng.push(i);
        }
    } else {
        for (let i = a; i >= b; i += c) {
            rng.push(i);
        }
    }
    return rng;
}

function sum(arr) {
    let sm = 0;
    for (let num of arr) {
        sm += num;
    }
    return sm;
}
console.log(range(10, 1));