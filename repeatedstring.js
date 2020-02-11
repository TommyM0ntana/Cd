function reverseString(str){

  //first way
  //convert the strign into array
  // var strignIntoArray = str.split("")
  // console.log(strignIntoArray)
  
  // //reverse the array 
  // var reversedArray = strignIntoArray.reverse()
  // console.log(reversedArray)
  
  // //reconvert the array into a sting
  // reverseArrayIntoString = reversedArray.join("")
  // console.log(reverseArrayIntoString)

//second way
  return str.split("").reverse().join("")


  //thirth way

var final = ""
for (let i = str.length-1; i>=0; i--){
final+=str[i]
   }
return final
  }
}
  
  
  console.log(reverseString("Buongiorno"))


//const - is for values that never changed
//ex: const pi = 3.14 is always like that 
//var - is available to hte entire function
//let -used for a forr loops (block local variables)only available into the block
//
