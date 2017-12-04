function dropElements(arr, func) {
  while (!func(arr[0])) {
    //loop as long as condition is false, remove first item
    arr.shift();
    //remove from array and moves everything over
  }
  return arr;
  //exit loop
}

dropElements([1, 2, 3], function(n) { return n < 3; });
