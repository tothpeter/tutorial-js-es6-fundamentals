'use strict';

+function(){
  var mySet = new Set();

  let anArray = [1, 1, 2, 1, 3];

  let myOtherSet = new Set(anArray);

  myOtherSet.add('something').add(1);
  myOtherSet.delete('2');
  // myOtherSet.clear();
  // console.log(myOtherSet.has('something'));

  // console.log(myOtherSet);
  // console.log(myOtherSet.size);

  myOtherSet.forEach(function(val1, _, set) {
    console.log(val1);
  });
}();
