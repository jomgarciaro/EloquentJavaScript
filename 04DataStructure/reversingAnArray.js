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

console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArrayInPlace([1, 2, 3, 4]));
