// Given 2 strings write a function 
// that determine if the first is an anagram of the second.
//ex: validAnagram("iceman","cinema") 
  


function validAnagram(first, second) {
  if (first.length !== second.length){
    return false
  }
let lookup = {}
for(let i in first){
     let letter = first[i]
     //using tilde lookup[i] =-~lookup[i]
     lookup[letter] ? lookup[letter] +=1 : lookup[letter] = 1
   }
for(let i in second){ 
  let letter = second[i]
  if (!lookup[letter]){
    return false 
  } else {
   
    console.log(lookup)
    lookup[letter] -= 1
  }
}
return true
}

console.log(validAnagram("anagram","nagaram"))


//tilde
// function freqMap(s) { 
//   freq={}; 
//   for (let c of s) 
//      freq[c]=-~freq[c]; 
//   return freq;
// }
