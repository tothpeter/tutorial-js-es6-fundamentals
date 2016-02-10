'use strict';

+function(){
  var testString = 'test string';

  console.log(testString.startsWith('test'));
  console.log(testString.endsWith('string', testString.length - 1));
  console.log(testString.includes('str'));

  console.log(testString.repeat(3));
}();
