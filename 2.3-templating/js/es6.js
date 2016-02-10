'use strict';

+function(){
  var a = 'hello';

  // console.log(`${a.toUpperCase()} world`);

  function str(literals, ...values) {
    // console.log(literals);
    // console.log(values);
    return values[0] + literals[1];
  }

  console.log(str`${a.toUpperCase()} world`);
}();
