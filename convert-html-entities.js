function convertHTML (str) {
  //split string into char array
  var placeHolder = str.split(" ");
  //iterate through char array
  for (var i = 0; i < placeHolder.length; i++) {
    //check current value of char
    switch(placeHolder(i){
      //check current value of char
      switch(placeHolder[i]){
        //if case is met, replace with HTML entity
        case '&':
          placeHolder[i]='&amp;';
          break;
        case '<':
          placeHolder[i] = '&lt;';
          break;
        case '>':
          placeHolder[i] = '&gt;';
        case '"':
          placeHolder[i] = '&quot;';
          break;
        case "'":
          placeHolder[i] = '&apos;';
          break;
      }
    }
    //join char array back into string
    str = placeHolder.join(" ");
    return str;
  }

convertHTML("Dolce & Gabanna");
