'use strict';

+function(){
  // var myPromise = new Promise(function(resolve, reject) {
  //   (Math.random() < .5) ? resolve('success') : reject('failure');
  // });

  // myPromise.then(function(msg) {
  //     console.log('The promise was resolved:', msg);
  //     return true;
  //   }, function(error) {
  //     console.log('The promise was rejected:', error);
  //     return false;
  //   }
  // ).then(function(value) {
  //     console.log(value);
  //   }, function(reason) {
  //     console.log(reason);
  //   }
  // );


  function getNumberFact(url) {
    return new Promise(function(resolve, reject) {
      var request = new XMLHttpRequest();

      request.onreadystatechange = function(e) {
        if (this.readyState === 4) {
          if (this.status === 200) {
            resolve(this);
          } else {
            reject(this);
          }
        }
      }

      request.open('GET', url, true);
      request.send();
    });
  }


  getNumberFact('http://numbersapi.com/random').then(
    function(xhr) {
      console.log('Siker');
      console.log(xhr.response);
    },

    function(xhr) {
      console.log('Neeem');
      console.log(xhr);
    }
  );
}();
