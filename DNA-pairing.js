function pairElement(str) {
  str = str.toUpperCase();
  //Changes string to uppercase for simple checking
  str = str.split("");
  //Breaks string up into a character array
  var placeHolderArray = [];
  //Empty array to be added to
  for (var i=0; i < str.length; i++) {
    //loop to iterate through character array
    if (str[i] == "G") {
      //checks current character and if equal
      placeHolderArray.push(["G", "C"]);
      //Adds to PHA to the corresponding DNA pair
    } else if (str[i] == "C") {
      placeHolderArray.push(["C", "G"]);
      //see if statement for G
    } else if (str[i] == "A"){
      placeHolderArray.push(["A", "T"]);
      //see if statement for G
    } else if (str[i] == "T") {
      placeHolderArray. push(["T", "A"]);
      //see if statement for G
    }
  }
  return placeHolderArray;
}

pairElement("A T C G A");
