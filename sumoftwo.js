function sumofTwo(arr,tar) {
    let newArray = [];
    let tempArray = arr;
    let ptarget = tar;
    for(let i=0;i<tempArray.length;i++) {
        for(let j=0;j<tempArray.length;j++) {
            if(tempArray[i]+tempArray[j] === ptarget) {
                console.log(tempArray[i],tempArray[j]);
                newArray.push(i);
                newArray.push(j);
                return newArray;
            }
        }
    }

    
}

const array = [2,4,8,6,9];
const target = 14
const result = sumofTwo(array, target);