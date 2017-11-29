function fearNotLetter(str) {
  var alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z ";
  //create a string that stores the alphabet
  alphabet = alphabet.split(" ");
  //split alphabet into letter character array
  str = str.split(" ");
  //splint input string into a character letter array
  if (str[0] != 'a') {
    return undefined;
  }
  //if first letter is not an 'a', return undefined
  for (var i = 0; i < str.length; i++) {
     if (str[i] != alphabet[i]) {
       return alphabet[i];
       //if letters does not match for alphabet and string, return current alphabet letter
     }
  }
  return str;
}

fearNotLetter("a b c e");
