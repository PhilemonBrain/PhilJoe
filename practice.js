function greatest(arr){
    let max = arr[0];
    for (const item of arr){
        if (max < item) max = item;
    }
    return max;
}
// console.log(greatest([5, 66, 89, 90, 4])) // should return 90

function compareGreatest(arr, arr2, arr3){
    a = greatest(arr)
    b = greatest(arr2)
    c = greatest(arr3)
    return(greatest({a,b,c}))
}

mylist = [43,67,32,76,23,54]
mylist2 = [89,92,12,77,20,46]
mylist3 = [79,123,63,44,95,17]
console.log(compareGreatest(mylist, mylist2, mylist3))