'use strict';

+function(){
  var x = 'test',
      y = 42;

  let myObj = {
    x, y,
    someMethod() {
      return 1
    }
  }

  // console.log(myObj);
  // console.log(myObj.someMethod());

  let dynamicPropertyName = {
    [x + y]: 'some value'
  }

  // console.log(dynamicPropertyName);

  let composedObj = Object.assign({}, myObj, dynamicPropertyName)

  console.log(composedObj);
}();
