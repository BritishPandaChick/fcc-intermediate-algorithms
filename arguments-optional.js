function addTogether() {
  function checkIfNumber(num) {
    return typeof num === 'number' ? num : undefined;
    //check type of number then return value
  }

  var a = checkIfNumber(arguments[0]);
  var b = checkIfNumber(arguments[1]);
  //create variables to stre values using checkif function

  if (arguments.length > 1) {
    return a && b ? a + b : undefined;
    //if truthy falses, return sum or undefined depending on value
  } else {
    if (a) {
      //if a is true
      return function(y) {
        if (checkIfNumber(y)) {
          return a + y;
          //if optional argument a number, returns result
        } else {
          return undefined;
      }
    };
  } else {
    return undefined;
    }
  }
}

addTogether(2, 3);
 
