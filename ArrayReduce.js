function ArrayReduce(arr, func, initialValue=0){
    for(const elem of arr){
        initialValue = func(elem,initialValue)
    }

    return initialValue
}


let res = ArrayReduce([1,2,3,4,5], (acc,curr) => acc + curr, 0)

console.log(res)