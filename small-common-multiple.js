function smallestCommons(arr) {
  // sor array from greatest to lowest
  arr.sort(function(a,b) {
    return b - a;
  });

  //create new array and add values from greater to smaller from original array
  let newArr = [];
  for (let i=arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  //variables that need to be declared outside the loops
  let quot = 0;
  let loop = 1;
  let n;

  //code runs while n is not the same as the array length
  do {
    quot = newArr[0] * loop * newArr[1];
    for (n=2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }
    loop++;
  } while (n !== newArr.length);
  return quot;
}

smallestCommons([1, 5]);
