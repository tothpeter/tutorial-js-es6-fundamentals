'use strict';

+function(){
  // var fn = param1 => param1 * param1;
  // var fn = param1 => ([param1 * param1]);
  var fn = param1 => ({square: param1 * param1});

  // console.log(fn(2));

  let user = {
    name: 'Toma'
  };

  // function getUserName() {
  //   return this.name;
  // }

  // console.log(getUserName.call(user));
  // console.log(getUserName.apply(user));
  // console.log(getUserName.bind(user)());

  let getUserName = () => this.name;
  console.log(getUserName.call(user));
}();
