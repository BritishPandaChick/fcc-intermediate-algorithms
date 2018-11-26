function uniteUnique(arr1, arr2, arr3) {
  //stores final result in empty array
  let finalArray = [];

  /* loop through arguments to truly make program work with 2 or more arrays */
  for (let i=0; i < arguments.length; i++) {
    let arrayArguments = arguments[i];

    //loop through array at hand
    for (let j=0; j < arrayArguments.length; j++) {
      let indexValue = arrayArguments[j];

      //checks if value is already on the final array
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }
  return finalArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
