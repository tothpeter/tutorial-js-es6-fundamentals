'use strict';

+function(){
  var [x, y] = ['a', 'b'];

  console.log(x, y);

  var {a, b} = {b: 'd', a: 'c'};

  console.log(a, b);

  function returnMultipleArrays() {
    return [
      ['a', 'b', 'c'],
      [1, 2, 3]
    ]
  }

  let [arr1, arr2] = returnMultipleArrays();

  console.log(arr1);
  console.log(arr2);
}();
