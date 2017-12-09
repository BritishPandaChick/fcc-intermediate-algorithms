function spinalCase(str) {
  str = str.replace(/([a-z])(A-Z)/g, '$1 $2').toLowerCase();
  //separate string into words and replace by adding spaces
  return str.replace(/\s | _ / g, '-');
  //find spaces and replace with '-'
}

spinalCase('This Is Spinal Tap');
