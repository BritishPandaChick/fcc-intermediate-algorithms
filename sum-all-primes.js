function sumPrimes(num) {
  var range = [];
  //set up an empty array
  for (var i=2; i <= num; i++) {
    //iterate to find prime number
    if (isPrimeNumber(i)) {
      range.push(i);
      //push prime number to range array
    }
  }

  return range.reduce(function(a,b){
    return a + b;
    //use reduce to sum all numbers up
  });
}

function isPrimeNumber(num){
  for (var x = 2; x < num; x++) {
    //iterates through numbers
    if (num % x === 0) {
      //if number can be divided and not get a remainder, number is not prime
      return false;
    }
  }
  return true;
}

sumPrimes(10);
 
