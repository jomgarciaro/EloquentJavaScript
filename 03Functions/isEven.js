function isEven(n) {
    let positive = Math.abs(n);
    if (positive == 0) {
        return true;
    } else if (positive == 1) {
        return false;
    } else {
        return isEven(positive - 2);
    }
}

console.log(isEven(-50));
console.log(isEven(75));

// Book's solution

function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
}