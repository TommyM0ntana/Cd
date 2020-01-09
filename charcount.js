//write a function which returns the count of each character in the string
//charCount("aaaa") //{a:4}
//charCount("hello") //{h:1,e:1,l:2,O:1}

// function charCount(str){
//   //make un object that returns at the end
//   let result = {}
//   //loop over the string for each character
//   for(let char of str){
//       char = char.toLowerCase()
//       if(/[a-z0-9]/.test(char)){

//      result[char] > 0 ? ++result[char] : result[char] = 1
//       //result[char] = result[char] ? result[char]++: 1
//       //result[char] = result[char]++ || 1 
//      //result[char] = result[char]? result[char]++:1
//       //  if(result[char] > 0){
//       //     //increment by 1
//       //     result[char]++
//       // } else {
//       //     //means is not in there
//       //     result[char] = 1
//        } 

    
// // //       //means is already in there
//         }
    
// // //   //if char is a number/letter and is a key in the object add 1 to count
// // //   //if is not in the object set it to 1
// // //   //if char is something else don't do anything
// // //   //return the object at the end that contains all the alpha/num  characters in the strings
//     return result
//    }
//   console.log(charCount("hello 435 ?"))










 //write a function which returns the count of each character in the string

//  charCount(str){
// //create un empty object that returns at the end
// let result = {}
// // loop over the string  all the characters alpha/num lowercase
// for(let i = 0; i < str.length; i++){
//   let char = str[i]
//   if (char > 0 ){
//     char++
//   }
// }
// //if is there incremet by 1
// //if is not there seu it to 1
// //return the object

//  }

 


//  function charCount(str){
//    let obj = {}
//    for(let char in str){
//      obj[char] > 0 obj[char]++ : obj[char] = 1

//    }
//    return obj
//   }

//   charCount("hello") // {h:1, e:1, l:2, o:1}


// function charCount(str){
//   //make un object that returns at the end
//   let result = {}
//   //loop over the string for each character
//   for(let char of str){
//       char = char.toLowerCase()
//       if(/[a-z0-9]/.test(char)){

//      result[char] > 0 ? ++result[char] : result[char] = 1
//       //result[char] = result[char] ? result[char]++: 1
//       //result[char] = result[char]++ || 1 
//      //result[char] = result[char]? result[char]++:1
//       //  if(result[char] > 0){
//       //     //increment by 1
//       //     result[char]++
//       // } else {
//       //     //means is not in there
//       //     result[char] = 1
//        } 

    
// // //       //means is already in there
//         }
    
// // //   //if char is a number/letter and is a key in the object add 1 to count
// // //   //if is not in the object set it to 1
// // //   //if char is something else don't do anything
// // //   //return the object at the end that contains all the alpha/num  characters in the strings
//     return result
//    }
//   console.log(charCount("hello 435 ?"))







// function charCount(str){
//   let obj = {}
//   for(let c of str){
//     c = c.lowerCase()
//     obj[c] = char
//     char > 0 ? char++ : char = 1

//   }
//   return obj
// }



  //console.log(charCount("hello hi"))
  
  
  
  // function charCount(str){
  // let result = {}
  // for(let char of str){
  //     char = char.toLowerCase()
  //    result[char] > 0 ? result[char]++ : result[char] = 1
  //         }
  //   return result
  //  }
  //  console.log(charCount("hello hi"))


  function charCount(str){
    //empty object
    let obj = {}
    for(let char of str){
      char = char.toLowerCase()
      //obj[char] > 0 ? obj[char]++ : obj[char] = 1
      obj[char] ? obj[char]++ : obj[char] = 1
      //lookup[letter] ? lookup[letter] +=1 : lookup[letter] = 1
    }
    return obj
    
  }

  console.log(charCount("hello"))
  function anagram(first, second) {
    if(first.length !== second.length){
      return false
    }
  let lookup = {}
  let letter 
  
  for(let i of first){
    lookup[i] =-~lookup[i]
  }
  // for(let i in first){
    
  //   letter = first[i]
  //   lookup[letter] ? lookup[letter] +=1 : lookup[letter] = 1
    // if(lookup[letter] > 0){
    //   lookup[letter]++
    // } else {
    //   lookup[letter] = 1
  // }
  for(let i in second){
  
    letter = second[i]
    if(!lookup[letter]){
      console.log(lookup)
      return false
    } else {
      console.log(lookup)
      lookup[letter] -=1
    }
  }
  return true
  }
  
  console.log(anagram("anagram","nagaram"))
  console.log(anagram("alex","aelx"))
  
  
  // function freqMap(s) { 
  //   freq={}; 
  //   for (let c of s) 
  //      freq[c]=-~freq[c]; 
  //   return freq;
  // }