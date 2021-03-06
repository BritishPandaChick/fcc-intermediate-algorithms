function steamrollArray(arr) {
  return arr.reduce(function(acc, next) {
    //return reduce function for accummulator and next arguments
    if (Array.isArray(next)) {
      return steamrollArray(acc.concat(next));
      //use recursion to call steamrollArray
    } else {
      return acc.concat(next);
      //call accumulator and concatentate
    }
  }, []);
  //specify the accumulator
}

steamrollArray([1, [2], [3, [[4]]]]);
 
