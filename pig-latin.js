function translatePigLatin(str) {
  let pigLatin = '';
  let regex = /[aeiou]/gi;

  //Checks if first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + 'way';
  } else if (str.match(regex) === null) {
    pigLatin = str + 'ay';
  } else {
    //Find how many consonants are before the vowel
    let vowelIndice = str.indexOf(str.match(regex)[0]);

    /* Take the string from the first vowel to the last char and add consonants
    previously omitted and add the ending */
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }
  return pigLatin;
}

translatePigLatin("consonant");
