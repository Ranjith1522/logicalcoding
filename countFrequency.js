function count(a) {
    let freq = {};
    for(let item of a) {
        freq[item] = (freq[item] || 0) + 1;
    }

    return freq;
}


console.log(count('banana'));