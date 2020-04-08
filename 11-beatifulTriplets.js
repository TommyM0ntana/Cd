
function beatifulTriplets(d, arr) {
  let tripletsAcc = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] === d) {
        for (let k = j; k < arr.length; k++) {
          if (arr[k] - arr[j] === d) {
            tripletsAcc++;
          }
        }
      }
    }
  }
  return tripletsAcc;
}

console.log(beatifulTriplets(1, [2, 2, 3, 4, 5])); // 3
