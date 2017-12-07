function findElements(arr, func) {
  return arr.filter(func)[0];
  //filter array and returns first element that passes truth test
}

findElements([1, 2, 3, 4], function(num) { return num % 2 === 0;});
