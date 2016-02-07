'use strict';

+function(){
  // console.log(block);

  if (true) {
    let block = 'block';
  }

  for (let i = 0; i < 4; i++) {
    // console.log(i);
  }

  const PI = 3.14;

  var obj = {
    test: 'Hello'
  };

  const ref = obj;

  obj.test = 'changed';

  console.log(ref);

}();
