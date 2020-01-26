function theHurdleRace(k, height) {
    let minPotions = 0;
    for(let h of height) {
        if(h-k > minPotions) minPotions = h-k;
    }
    return minPotions;
}

console.log(theHurdleRace(4, [1,6,3,5,2])); // 2
console.log(theHurdleRace(7, [2, 5, 4, 5, 2])); // 0