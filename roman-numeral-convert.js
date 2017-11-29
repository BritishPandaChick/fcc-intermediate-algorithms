function convertToRoman(num) {
  var roman = "";
  //Create empty string
  var romanNumeral = ["M", "CM", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  //Create an array of possible RN up to 1000
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  //create an array of possible number values
  for (var i=0; i < numbers.length; i++){
    //iterate for a length of our numbers array
    while (num >= numbers[i]){
      //Whilte original number is larger than our inputted numbers array
      roman = roman + romanNumeral[i];
      //Add its equivalent roman numeral to original empty string
      num = num - numbers[i];
      //subtract the value from the original number to end while loop
    }
  }
  return roman;
}

convertToRoman(36);
