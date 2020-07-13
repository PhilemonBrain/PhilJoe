function compareGreatest(a, b, c){
    function greatest(arr){
    var max = arr[0]
    for (const item of arr){
        if (item > max) max = item;
    }
    return max;
}
   
    console.log(greatest(a), greatest(b), greatest(c))
}
