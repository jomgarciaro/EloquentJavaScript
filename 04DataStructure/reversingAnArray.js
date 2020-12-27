function reverseArray(arr) {
    let newArr = [];
    for (let element of arr) {
        newArr.unshift(element);
    }
    return newArr;
}

function reverseArrayInPlace(arr) {
    let a;
    for (let i = 1; i < arr.length; i++) {
        a = arr[i];
        arr.splice(i, 1);
        arr.unshift(a);
    }
    return arr;
}

function reverseArrayInPlace2(arr) {
    let old;
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        old = arr[i];
        arr[i] = arr[arr.length - 1 -i];
        arr[arr.length - 1 - i] = old;
    }
    return arr;
}

console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArrayInPlace([1, 2, 3, 4]));
console.log(reverseArrayInPlace2([1, 2, 3, 4]));