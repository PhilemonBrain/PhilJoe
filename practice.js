function greatest(arr){
    let max = arr[0];
    for (const item of arr){
        if (max < item) max = item;
    }
    return max;
}
console.log(greatest([5, 66, 89, 90, 4])) // should return 90

