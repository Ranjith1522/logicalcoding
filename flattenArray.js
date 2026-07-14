const arr = [1, 2, [3, 4], [5, [6, 7]], 8];


function flatten(a) {
   let result = [];
    for(let item of a) {
        if(Array.isArray(item)) {
           result.push(...flatten(item));
        } else {
            result.push(item);
        }
    }
    return result;
}


result = flatten(arr);
console.log(result)