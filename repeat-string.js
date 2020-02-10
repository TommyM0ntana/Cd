function reverseString(str){
// //convert it to array
//   var stringArray = str.split("")
//   console.log(stringArray)
// // revers it
// var reversedString = stringArray.reverse()
// console.log(reversedString)
// //riconvert it to array
// var reversedStringIntoArray = reversedString.join("") 
// return reversedStringIntoArray


// return str.split("").reverse().join("")


var final = ""
for (var i = str.length - 1; i >= 0; i--){
  console.log(str[i])
final +=str[i]
  }
return final
}

console.log(reverseString("hello"))