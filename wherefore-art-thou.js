function whatIsInAName(collection, source) {
  //where takes larger input collection and compares it with the selection needed AKA source
  var arr = collection.filter(function(item){
    //use filter and return the true values
    for (var i in source) {
      //check values in source and compare with item
      if (source[i] != item[i]) {
        return false;
      }
    }
    return true;
  });
  return arr;
}

whatIsInAName([{first: "Romeo", last: "Montague"}, {first: "Mercutio", last: null}, {first: "Tybalt", last: "Capulet"}]), {last: "Capulet"});
