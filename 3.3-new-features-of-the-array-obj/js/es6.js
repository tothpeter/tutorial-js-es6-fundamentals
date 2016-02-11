'use strict';

+function(){
  // console.log(Array.of('test', [1, 2], {foo: 'bar'}));

  function arrayFromArgs() {
    // console.log(arguments);
    return Array.from(arguments);
  }

  // console.log(arrayFromArgs('1st', '2nd'));

  let superHeros = [
    {
      name: 'Peter Parker',
      superHeroName: 'Spiderman'
    },
    {
      name: 'Bruce Wayne',
      superHeroName: 'Batman'
    }
  ];

  function findByHeroName(name) {
    // findIndex is similar, returns an index (or -1) instead of the item
    return superHeros.find(function(hero) {
      return hero.superHeroName === name;
    });
  }

  // console.log(findByHeroName('Batman'));

  // copyWithin(1, 0) => will result 2 spiderman objects
}();
