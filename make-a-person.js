var Person = function(firstAndLast) {
  var array = firstAndLast.split(" ");
  //array for first and last name then split at spaces
  this.getFirstName = function() {
    return array[0];
  };
  //get the first name
  this.getLastName = function() {
    return array[1];
  };
  //get the last name
  this.getFullName = function() {
    return array[0] + " " + array[1];
  };
  //get the full name
  this.setFirstName = function(first) {
    array[0] = first;
  };
  //sets the first name
  this.setLastName = function(last) {
    array[1] = last;
  };
  //sets the last name
  this.setFullName = function(firstAndLast) {
    //set the full name (both first and last name)
    var arraySplit = firstAndLast.split(" ");
    //split array on the spaces
    this.setFirstName(arraySplit[0]);
    this.setLastName(arraySplit[1]);
    //set the values
  };
};

var bob = new Person ('Bob Ross');
bob.getFullName();
