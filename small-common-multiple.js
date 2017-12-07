function smallestCommons(arr) {
  var min = Math.min(arr[0], arr[1]);
  //find minimum number in array
  var max = Math.max(arr[0], arr[1]);
  //find maximum number in array
  var range = [];
  //find the range and put in array

  for (var x=min; x <= max; x++) {
    range.push(x);
    //Populate numbers in range and push to array
  }

  var a = Math.abs(range[0]);
  //find absolute position for the range
  for (var i=1; i < range.length; i++) {
    //iterate through range array
    var b = Math.abs(range[i]);
    //find absolute position for range[i]
    var c = a;

    while (a && b) {
      //continue looping as long as A & B are "truthy"
      if (a > b) {
        //check for the conditions
        a %= b;
        //change value of a by mutating the value
      } else {
        b % a;
      }
    }
    a = Math.abs(c * range[i] / (a + b));
    //change value of a by multiplying value of c with current range number then divide by sum of a & b
  }
  return a;
}

smallestCommons([1, 5]);
