// Given an array of integers, return an array of indices of the two numbers
// that add up to the target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.
// --- Examples
// twoSum([2,7,11,15], 9) --> [0,1]
// twoSum([3,2,4], 9) --> [1,2]

function twoSum(arr, target) {}
var twoSum = function(nums, target) {
  arr=[]
    nums.forEach((num,index) => {
      i = index+ 1
      while ( i < nums.length){
        if(num + nums[i] == target){
          arr.push(index,i)
            break
        }
        i++
      } 
    });
      return arr
  }