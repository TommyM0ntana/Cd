
// Given 2 strings write a function 
// that determine if the first is an anagram of the second.
//ex: validAnagram("iceman","cinema") 

// function validAnagram(first, second) {
//   if (first.length !== second.length){
//     return false
//   }

// let lookup = {}
// for(let i = 0; i < first.length; i++){
//   let letter = first[i]
//   lookup[letter] ? lookup[letter] +=1 : lookup[letter] = 1
// }

// console.log(lookup)
// for(let i = 0; i < second.length; i++){
//   let letter = second[i]
//   if (!lookup[letter]){
//     return false 
//   } else {
//     lookup[letter] -= 1
//   }
// }
// return true
// }

// validAnagram("anagram","nagaram")




function validAnagram(first, second) {
  if (first.length !== second.length){
    return false
  }

  

let lookup = {}
for(let i in first){
  let letter = first[i]
  lookup[letter] ? lookup[letter] +=1 : lookup[letter] = 1
}
//lookup[i] =-~lookup[i]

for(let j in second){
  let letter = second[j]
  if (!lookup[letter]){
    return false 
  } else {
    lookup[letter] -= 1
  }
}
return true
}

console.log(validAnagram("anagram","nagaram"))
console.log(validAnagram("car","rac"))





