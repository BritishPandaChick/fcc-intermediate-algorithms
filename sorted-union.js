function uniteUnique(arr1, arr2, arr3) {
  var placeHolder = arr1;
  //create duplicate array from original array

  for (var i=0; i < arguments.length; i++) {
    //iterate through the length of arguments
    for (var j = 0; j < arguments[i].length; j++) {
      //iterates through current index value of arguments
      if (placeHoder.indexOf(arguments[i][j]=== -1){
        //Check if array contains the value of arguments
        //returns -1 if it does not
        placeHolder.push(arguments[i][j]);
        //add to the end of the placeholder array
      }
    }
  }
  arr1 = placeHolder;
  //set original array equal to altered array
  return arr1;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
