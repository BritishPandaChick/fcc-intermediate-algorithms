function spinalCase(str) {
  //Create a variable for white space and underscores
  var regex = /\s+|_+/g;

  //Replace lower-upper case to lower-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  //Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
