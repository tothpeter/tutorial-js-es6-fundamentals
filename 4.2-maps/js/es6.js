'use strict';

+function(){
  let myMap = new Map([['a', 1], ['b', 2], [2, 1]])
  myMap.set('a', {2: 2});

  // console.log(myMap);
  // console.log(myMap.keys());
  // console.log(myMap.has('oops'));
  // console.log(myMap.get('a'));

  myMap.forEach(function(item, key, map) {
    console.log(item);
  })
}();
