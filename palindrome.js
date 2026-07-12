function checkPalindrome(input) {
    let reverse = '';//madam
    for(let i=input.length-1;i>=0;i--) {
        reverse+=input[i];
    }
    return reverse === input;
}



console.log(checkPalindrome("madam"));