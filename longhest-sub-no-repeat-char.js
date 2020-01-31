
//Sliding window approach
//the current index will always be the end,as the end increase increase the start
//
// a,b,c,a,b,c,b,b = > {a:2,b:4,c:2}
//output => 3 

var lengthOfLongestSubstring = function(s) {
   // all the char in the input str
let charsMap = {}
// index of where the index will start
let charStart = 0
//what will return 
let maxLength = 0

for (let i in s) {
  //current char we are is consider the end 
  let endChar = s[i]
//to see if the current char has already been found 
if(charsMap[endChar]  >= charStart ){
//update the charStart
charsMap 

    }
    //update charMap
    //update maxLength
    //
  }
}