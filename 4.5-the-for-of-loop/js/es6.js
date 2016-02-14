'use strict';

+function(){
  var obj = {
    a: 1,
    b: 2
  }

  for (var param in obj) {
    // console.log(obj[param]);
  }

  for (let val of ['a', 'b']) {
    // console.log(val);
  }

  let mySet = new Set([1, 2, 3]);

  for (let val of mySet) {
    // console.log(val);
  }

  let myMap = new Map([['a', 1], ['b', 2]]);

  for (let val of myMap) {
    console.log('key: ', val[0]);
    console.log('val: ', val[1]);
  }
}();
