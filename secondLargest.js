function secondLargest(n) {
   
    n.sort((a, b) => b - a);
   
    return(n[1]);
}

const arr = [12,4,56,34,32,10];

console.log("second largest : ",secondLargest(arr));