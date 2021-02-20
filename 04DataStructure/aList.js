function arrayToList(arr) {
    let list = {value: arr[arr.length - 1], rest: null};
    for (let i = arr.length - 2; i >= 0; i--) {
        let old = list;
        list.rest = old;
        list.value = arr[i]
    }
    return list;
}

console.log(arrayToList([1, 2, 3, 4]));