function diffArray(arr1, arr2) {
  var holderArray = [];
  //same, same; but different.
  for(var i=0; i < arr1.length; i++) {
    //iterature through array 1
    if(arr2.indexOf(arr1[i])===-1){
      //if array 2 doesn't contain items in array 1
      holderArray.push(arr1[i]);
      //Add to new array
    }
  }
  //vice versa switch array 1 with array 2
  for (var j=0; j < arr2.length; j++) {
    if(arr1.indexOf(arr2[j])===-1){

    }
  }
  return holderArray;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
