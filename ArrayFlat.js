function flatArray(arr, depth=1, output=[]){
    if (depth <= 0){
        output.push(arr)
        return output
    }else{
        for(const elem of arr){
            if (Array.isArray(elem)){
                flatArray(elem, depth-1, output)
            }else{
                output.push(elem)
            }
        }
        return output
    }
}
const arr = [1, 2, 3, 4, 5, [6, 4, 3, 5, [1, 2, 3]]];
console.log(flatArray(arr,10))