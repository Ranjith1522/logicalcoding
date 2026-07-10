function sumofTwo(arr,tar) {
    let newArray = [];
   
    for(let i=0;i<arr.length;i++) {
        for(let j=i+1;j<arr.length;j++) {
            if(arr[i]+arr[j] === tar) {
                console.log(arr[i],arr[j]);
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