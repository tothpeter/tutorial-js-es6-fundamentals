'use strict';

+function(){
  function logSomething(something = 'api', secondParam = something + '.kalina.tech') {
    console.log(something);
    console.log(secondParam);
  }

  // logSomething();
  // logSomething('www');

  function sum(a, b, c) {
    return a + b + c;
  }

  let nums = [1, 2, 3];

  // console.log(sum(...nums));

  let nums2 = [...nums, 4, 5 ,6]
  // console.log(nums2);

  function joinStuff(...stuffs) {
    console.log(stuffs.join('.'));
  }

  // joinStuff('www', 'kalina', 'tech');
}();
