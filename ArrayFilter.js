const ArrayFilter = (arr, func, output=[]) =>{
    for(const elem in arr){
        let checkElem = func(elem)
        if(checkElem){
            output.push(elem)
        }
    }

    return output
}

const arr = [1,2,3,4,5,6,7,8]
const isEven = (num) => num%2 === 0 
console.log(ArrayFilter(arr,isEven))