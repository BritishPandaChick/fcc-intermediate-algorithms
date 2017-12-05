function truthCheck(collection, pre) {
  return collection.every(function(obj){
    //call every method on collection variable and pass callback function to every method with one required argument
    return obj[pre];
    //access pre property to object and see if not object
  });
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); 
