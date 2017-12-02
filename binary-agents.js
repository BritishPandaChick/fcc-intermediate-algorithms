function binaryAgents(str) {
  return str.split(' ').map(function(value) {
    //conver string into array using split with new values with ma
    return String.fromCharCode(parseInt(value, 2));
    //takes string data type and gives number to generate string value
  }) .join('');
  //join letters and characters together in array
}

binaryAgent("01000001 01110010 01100101 01101110 0010011 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 01111111 ");
