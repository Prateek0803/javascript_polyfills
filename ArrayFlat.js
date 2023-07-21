function flatArray(arr, depth=1, output=[]){
    if (depth <= 0){
        output.push(arr)
        return output
    }else{
        for(const elem in arr){
            if (Array.isArray(elem)){
                flatArray(elem, depth-1, output)
            }else{
                output.push(elem)
            }
        }
        return output
    }

}