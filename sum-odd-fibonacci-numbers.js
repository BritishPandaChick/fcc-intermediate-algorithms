array.prototype.last = function() {
  return this[this.length -1];
  //grabs array's last value
};

array.prototype.secondToLast = function() {
  return this[this.length - 2];
  //grabs array's second to the last value
};

function sumFibs(num) {
  var sequence = [1, 1];
  //starting sequence with 1, 1
  while (sequence.secondToLast() + sequence.last() <= num) {
    //last two numbers add together and less than equal to argument
    sequence.push(sequence.secondToLast() + sequence.last());
    //add together and push end of the array
  }

  return sequence.filter(function(num) {
    return num % 2 !== 0;
  }).reduce(function(a,b){
    return a + b;
    //filter out and reduce values
  });
}
  
sumFibs(4);
