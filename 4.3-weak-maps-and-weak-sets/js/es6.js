'use strict';

+function(){
  // collections of objects only | not enumerable | References to objects in the collection are held weakly. (do not prevent GC)
  var myWeakSet = new WeakSet();

  let someObject = {};
  myWeakSet.add(someObject);

  // myWeakSet.has(someObject);
  // myWeakSet.delete(someObject);

  someObject.a = 1;

  console.log(myWeakSet);

  // ----------- WeakMaps

  let myWeakMap = new WeakMap();
}();
