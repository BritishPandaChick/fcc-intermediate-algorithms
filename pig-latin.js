function translatePigLatin(str) {
  var letters = str.split(" ");
  //Break original string into an array of characters
  var vowelsRegex = /[a e i o u]/;
  //Regex for strings that contain ' a e i o u'
  if (vowelsRegex.test(letters[0])){
    //test the first character of the array
    return letters.join(" ") + "way";
    //Upon matching adds way to the end of the string
  }

  while (true){
    //for cases not matching vowels
    if (!vowelsRegex.test(letters[0])){
      //if regex does not contain vowel at first char
      letters.push(letters.splice(0, 1));
      //Push it to the end and splice the first letter
    } else {
      break;
      //Breaks upon finding a vowel
    }
  }

  str = letters.join(" ") + "ay";
  //Adds ay to the end and joins string back together
  return str;
}

translatePigLatin("consonant");