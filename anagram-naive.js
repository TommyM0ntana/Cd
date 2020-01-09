// Given 2 strings write a function 
// that determine if the first is an anagram of the second.
//ex: validAnagram("iceman","cinema") 

function validAnagram(first, second) {
  if (first.length !== second.length){
    return false
  }
let lookup = {}

for(let i=0;i<first.length;i++){
  let letter = first[i]
  if (lookup[letter] > 0 ){
    lookup[letter]++
  }else{
    lookup[letter] = 1
  }
}
for(let i = 0; i < second.length; i++){ 
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